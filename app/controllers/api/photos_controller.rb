class Api::PhotosController < ApplicationController
  def show
    @photo = Photo.find(params[:id])
    if @photo
      @comment = @photo.comments;
    end

  end

  def index
    @photos = Photo.all
    @photos.includes(:comments)
  end

  def create
    @photo = Photo.new({author_id: current_user.id}, photo_params)
    if @photo.save
      render 'api/photos/show'
    else
      render json: @photo.errors.full_messages
    end
  end

  def update
  end

  def destroy
    @photo = Photo.find(params[:id])
    if @photo
      @photo.destroy
      render json: ['Photo removed!']
    else
      render json: ['Photo does not exist!']
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:photo_url, :captions)
  end
end
