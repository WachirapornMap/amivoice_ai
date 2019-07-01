class ApplicationController < ActionController::Base
    add_flash_types :danger, :info, :warning, :success, :warning_login  
    protect_from_forgery with: :null_session
    before_action :set_cache_headers
    helper_method :is_user_logged_in?, :current_user, :verify_exports_menu

    def is_user_logged_in? 
        return redirect_to APP_CONFIG[:ami_tuning_tools] if session[:current_user_id].nil?
        
        current_user = User.find_by(id: session[:current_user_id])
        role_id = current_user.role_id
        permission_export_page = [1,2] # param in (1,2)
        @pass_permission = PermissionsRole.find_by(role_id: role_id,permission_id: permission_export_page)
        return true # redirect_to APP_CONFIG[:ami_tuning_tools] if !@pass_permission.present?
    end 
    def current_user 
        @current_user ||= User.find_by(id: session[:current_user_id]) if !session[:current_user_id].nil? 
    end
    def verify_exports_menu
        current_user = User.find_by(id: session[:current_user_id])
        role_id = current_user.role_id
        permission_export_page = [1,2] # param in (1,2)
        @pass_permission ||= PermissionsRole.find_by(role_id: role_id,permission_id: permission_export_page)
    end 

    private 
    
    def set_cache_headers
        response.headers["Cache-Control"] = "no-cache, no-store"
        response.headers["Pragma"] = "no-cache"
        response.headers["Expires"] = "Mon, 01 Jan 1990 00:00:00 GMT"
    end
 
end
