require 'openssl'
require 'base64'

class LoginSystemController < ApplicationController  
    
    $alg = 'aes-256-cbc'
    $key = 'AMI_VOICE_THAI_123_CHR_123456789'  ## 32 Characters
    $iv = '1016100150078914' ## 16 characters

    def index   
        if !session[:current_user_id].nil?
            return redirect_to intentions_path
        end 
    end 

    def login
        # TODO: Change it into db login or remove it
        if !params['username'].nil? && !params['password'].nil? 
             @username = params['username']
             @password = params['password']
             login_auth()
        else
            return redirect_to login_path
        end  
    end
    def login_auth 
        if !@username.nil? && !@password .nil?
        elsif !params[:from_login][:username].nil? && !params[:from_login][:password].nil? && !params[:from_login][:username].blank? && !params[:from_login][:password].blank?
            @username = params[:from_login][:username]
            @password = encrypt(params[:from_login][:password])
        else
            return redirect_to amivoice_ai_path, warning_login: ["username or password is empty!!!"]
        end 
        @result_database = User.find_by(login: @username, password: decrypt(@password)) 
        if @result_database.present? 
            session[:current_user_id] = @result_database.id
            redirect_to intentions_path
        else
            redirect_to amivoice_ai_path, warning_login: ["username or password is incorrect!!!"]
        end
    end
    def logout_auth 
        session.delete :current_user_id
        redirect_to amivoice_ai_path 
    end
    def check_auth
        username = params[:username] 
        result_user = User.find_by(login: username)
        result = 0
        result = encrypt(result_user.password) if result_user.present?   #encrypt(result_user.password)
        respond_to do |format|
            format.html { send_data result }
        end
    end 
    private
    def encrypt(des_text)
        des = OpenSSL::Cipher::Cipher.new($alg)
        des.encrypt
        des.key = $key
        des.iv = $iv 
        result = des.update(des_text)
        result << des.final
        return Base64.encode64 result
    end
    def decrypt(des_text)
        des = OpenSSL::Cipher::Cipher.new($alg)
        des.decrypt
        des.key = $key
        des.iv = $iv
        result = des.update(Base64.decode64(des_text))
        result << des.final
        return result
    end
end
