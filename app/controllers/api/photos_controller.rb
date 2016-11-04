class Api::PhotosController < ApplicationController
  def show
    @photo = Photo.find(params[:id])
  end

  def index
    @photos = Photo.all
  end

  def create
    @photo = Photo.new(photo_params.merge(current_user))
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
    params.require(:photos).permit(:photo_url, :caption)
  end
end
