class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    @photo = @user.photos
  end

  def index
    @users = User.all
    @users.includes(:follows)
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:users).permit(:username, :password, :email, :icon_url, :nickname)
  end

end
