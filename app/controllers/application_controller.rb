class ApplicationController < ActionController::Base
    before_action :search_set_ransack
    def after_sign_in_path_for(resource)
        if current_user.admin == true
            # redirect_to admin_users_path and return
            admin_users_path
        else
            core_pages_top_path

        end
    end
    def search_set_ransack
        @q = FormQuestion.ransack(params[:q])
    end
end
