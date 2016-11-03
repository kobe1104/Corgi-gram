class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(author_id: current_user ,photo_params)
    if @photo.save
      render 'api/photos/show'
    else
      render json: @photo.errors.full_messages
    end
  end

  def destroy
  end

  private

  def photo_params
    params.require(:photo).permit(:photo_url, :caption, :type)
  end
end
