class UserSessionController < ApplicationController
    def auth_check
        # OAUTH like flow
        # redirect to authentication server
        # with params : code, client_id,redirect_uri
        app = params['app']
        auth_params = {
          # code: 'fix',
          # no meaning in client id , hex("dialogconsole")
          client_id: '6469616C6F67636F6E736F6C65',
          redirect_uri: callback_url,
          scope: 'dialogconsole',
          state: 'auto'
        }
        site =  Rails.application.config.tuning_tools_site
        target_url = generate_url(File.join(site,'auth'), auth_params)
        if app == 'tuningtools'
          redirect_to(target_url)
        else
          redirect_to callback_url
        end
      end
    
      def login
        # TODO: Change it into db login or remove it
        if params['username'] == 'amithai' && params['password'] == 'pass'
          token = JwtToken.encode(username: 'amithai')
          json_response(token: token)
        else
          json_response({ message: 'Unauthorized' }, :unauthorized)
        end
      end
    
      def status
        token = bearer_token
        auth_obj = JwtToken.decode(token)[0]
        exp = auth_obj['exp']
        sub = auth_obj['sub']
        if exp > Time.now.to_i
          json_response(sub)
        else
          throw 'Unauthorized'
        end
      rescue
        json_response({ message: 'Unauthorized' }, :unauthorized)
      end
    
      def token_chain
        # ther user logged in another site and passing token for retriving login information
        p params
        # appname = params['appname']  only tuning_tools can use
        code = params['code']
        tuningtool_auth_token = retirve_tuning_tools_token code
        user = retirve_tuning_tools_user tuningtool_auth_token['access_token']
        token = JwtToken.encode(username: user['login'])
        json_response(token: token)
      rescue
        json_response({ message: 'Unauthorized' }, :unauthorized)
      end
    
      def login_params
        params.require(:person).permit(:username, :password)
      end
    
      private
    
      def retirve_tuning_tools_token(code)
        site = Rails.application.config.tuning_tools_site
        session_uri = File.join(site, 'auth')
        Rails.logger.info "Exchange session from #{session_uri}"
        token = RestClient::Request.execute(
          :url => session_uri,
          :method => :post,
          :payload => { code: code },
          :verify_ssl => false
        )
        JSON.parse(token)
      end
    
      def retirve_tuning_tools_user(token)
        site = Rails.application.config.tuning_tools_site
        session_uri = File.join(site, 'session/me')
        Rails.logger.info "Check session from #{session_uri}"
        user_response = RestClient::Request.execute(
          :url => session_uri,
          :method => :get,
          :headers => { :Authorization => "Bearer #{token}" },
          :verify_ssl => false
        )
        Rails.logger.info "Retrive user: #{user_response}"
        JSON.parse(user_response)
      end
    
      def callback_url
        base_url =  Rails.application.config.dialog_console_site
        target = '/harbor'
        File.join(base_url, target).to_s
      end
    
      def generate_url(url, params = {})
        uri = URI(url)
        uri.query = params.to_query
        uri.to_s
      end
end
