class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follower_id: current_user.id, followed_id: follow_params[:followed_id])
    if @follow.save
      render 'api/follows/show'
    else
      render json: @follow.errors.full_messages
    end
  end

  def show
    @follow = Follow.find(params[:id])
  end

  def index
    @follows = Follow.all
  end

  def destroy
    @follow = Follow.find(params[:id])
    if @follow
      @follow.destroy
      render 'api/follows/show'
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:followed_id)
  end
end
