class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @user = User.ci_find("email", params[:user][:email])
  
    if @user && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      render json: @user, status: 201
    else
      render :json => { :errors => @user.errors}, status: 422
    end
  end
end
