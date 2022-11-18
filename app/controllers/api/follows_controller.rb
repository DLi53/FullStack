class Api::FollowsController < ApplicationController

    # skip_before_action :verify_authenticity_token

    def index
        # @follows = Follow.all
        if logged_in?
            @follows = Follow.where(follower_id: current_user.id)
            render :index
        # else
        #     @follows = Follow.all
        #     render :index
        end
    end

    def show
        @follow = Follow.find(params[:id])
        render :show
    end

    def create
        @follow = Follow.new(follow_params)
        if @follow.save

            render :show
        else
            render json: ["somethings wrong"]
        end

    end

    def update
        @follow = Follow.find(params[:id])
        
        if @follow.update(follow_params)
            render :show
        else
            render json: @follow.errors.full_messages
        end
    end

    def destroy

        @follow = Follow.find(params[:id])
        if @follow && @follow.destroy
            render json: ["Follow is Gone"]
        else
            render json: ["Follow dont exist"]
        end
    end


    private
    def follow_params
        params.require(:follow).permit(:follower_id, :followee_id)
    end
    
end