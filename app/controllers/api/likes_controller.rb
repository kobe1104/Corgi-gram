class Api::LikesController < ApplicationController

  def create
    @like = Like.new(author_id: current_user.id, photo_id: like_params[:photo_id])
    if @like.save
      render 'api/likes/show'
    else
      render json: @like.errors.full_messages
    end
  end

  def destroy
    @like = Like.find(params[:id])
    if @like
      @like.destroy
      render 'api/likes/show'
    end
  end

  def index
    @likes = Like.all
  end

  def show
    @like = Like.find(params[:id])
  end

  private

  def like_params
    params.require(:like).permit(:photo_id)
  end
end
