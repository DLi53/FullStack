class Api::SessionsController < ApplicationController
  before_action :require_logged_in, only: [:destroy]

  def show
    @user = current_user
    if @user
      render 'api/users/show'
    else
      render json: { user: nil }
    end
  end

  def create
    @user = User.find_by_credentials(
      params[:username],
      params[:password]
    )

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: { errors: ['The password you entered is incorrect.'] }, status: 401
    end
  end

  def destroy
    logout
    render json: {}
  end
end
