class Api::ImagesController < ApplicationController

    # skip_before_action :verify_authenticity_token

    def index
        @images = Image.all
        # @images = image.where(user_id: params[:user_id])
        render :index
    end

    def show
        @image = Image.find(params[:id])
        render :show
    end

    def create
        @image = Image.new(image_params)
        # if current_user
        #     @image.uploader_id = current_user.id
            if @image.save
                render :show
            else
                render json: ["somethings wrong"]
            end
        # else
        #     return render json: ["Please Sign In"]
        # end
    end

    def update
        @image = Image.find(params[:id])
        
        if @image.update(image_params)
            render :show
        else
            render json: @image.errors.full_messages
        end
    end

    def destroy
        @image = image.find(params[:id])
        if @image && @image.destroy
            render json: ["Pin is Gone"]
        else
            render json: ["Pin dont exist"]
        end
    end


    private
    def image_params
        params.require(:image).permit(:title, :description, :uploader_id)
    end
    
end