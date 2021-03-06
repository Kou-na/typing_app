class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end

  def set_current_users_word
    if user_signed_in?
      @current_users_word = Word.find_by(user_id: current_user.id)
    end
  end
end
