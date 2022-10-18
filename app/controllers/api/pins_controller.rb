class Api::PinsController < ApplicationController

    # skip_before_action :verify_authenticity_token

    def index
        @pins = Pin.all
        # @pins = pin.where(user_id: params[:user_id])
        render :index
    end

    def show
        @pin = Pin.find(params[:id])
        render :show
    end

    def create
        @pin = Pin.new(pin_params)
        if @pin.save
            debugger

            render :show
        else
            render json: ["somethings wrong"]
        end

    end

    def update
        @pin = Pin.find(params[:id])
        
        if @pin.update(pin_params)
            render :show
        else
            render json: @pin.errors.full_messages
        end
    end

    def destroy
        @pin = pin.find(params[:id])
        if @pin && @pin.destroy
            render json: ["Pin is Gone"]
        else
            render json: ["Pin dont exist"]
        end
    end


    private
    def pin_params
        params.require(:pin).permit(:image_id, :board_id)
    end
    
end