class Api::CommentsController < ApplicationController
  def show
    @comment = Comment.find(params[:id]).includes(:user)
  end

  def index
    @comments = Comment.all
  end

  def create
    @comment = Comment.new(author_id: current_user.id, photo_id: comment_params[:photo_id], body: comment_params[:body])
    if @comment.save
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment
      @comment.destroy
      render 'api/comments/index'
    else
      render json: ['comment does not exist']
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:photo_id, :body)
  end
end
