class ApplicationController < ActionController::Base
    def after_sign_in_path_for(resource)
        if current_user.admin == true
            # redirect_to admin_users_path and return
            admin_users_path
        else
            core_pages_top_path

        end
    end
end
