class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_current_users_word

  def show
    @words = current_user.words
  end

  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
      flash[:notice] = "更新しました！"
    else
      render :edit
    end
  end

  private
  def user_params
    params.permit(:name, :email, :password)
  end
end
