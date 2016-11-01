class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      log_in(@user)
      render 'api/users/show'
    else
      render json: ["invalid credentials"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      log_out
      render json: ["Ciao!"]
    else
      render json: ["Current User does not exist"], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
