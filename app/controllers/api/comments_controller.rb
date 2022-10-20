class Api::CommentsController < ApplicationController

    # skip_before_action :verify_authenticity_token

    def index
        @comments = Comment.all
        # @comments = comment.where(user_id: params[:user_id])
        render :index
    end

    def show
        @comment = Comment.find(params[:image_id])
        render :show
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.commenter_id = current_user.id
        if @comment.save


            render :show
        else
            render json: ["somethings wrong"]
        end

    end

    def update
        @comment = Comment.find(params[:id])
        
        if @comment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages
        end
    end

    def destroy
        @comment = Comment.find(params[:id])

        if @comment.destroy
            render json: ["Comment is Gone"]
        else
            render json: ["Comment dont exist"]
        end
    end


    private
    def comment_params
        params.require(:comment).permit(:description, :image_id, :commenter_id)
    end
    
end