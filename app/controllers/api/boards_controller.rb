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

    private
    def board_params
        params.require(:board).permit(:title, :user_id)
    end
    
end