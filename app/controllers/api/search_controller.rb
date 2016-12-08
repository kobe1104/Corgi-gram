class Api::SearchController < ApplicationController
  def index
    search_string = params[:search]
    if search_string == nil
      @search_result = []
    else
      @search_result = User.where('username LIKE ?',  "%#{search_string}%")
    end
    render :index
  end
end
