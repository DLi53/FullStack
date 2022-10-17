class Api::BoardsController < ApplicationController

    # skip_before_action :verify_authenticity_token

    def index
        # @boards = Board.all
        @boards = Board.where(user_id: params[:user_id])
        render :index
    end

    def show
        @board = Board.find_by(id: params[:id])
        render :show
    end

    def create
        @board = Board.new(board_params)

        if @board.save
            render :show
        else
            render json: ['something wrong']
        end
    end

    def update
        @board = Board.find(params[:id])

        if @board.update(board_params)
            render :show
        else
            render json: @board.errors.full_messages
        end
    end

    def destroy
        @board = board.find(params[:id])
        if @board && @board.destroy
            render json: ["Board Deleted"]
        else
            render json: ["Board doesn't exist"]
        end
    end

    private
    def board_params
        params.require(:board).permit(:title, :user_id)
    end
    
end