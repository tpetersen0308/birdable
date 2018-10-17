class SessionsController < ApplicationController

  def create
    @user = User.ci_find("email", params[:email]).first

    if @user && @user.authenticate(params[:password])
      render json: @user, status: 201
    else
      render :json => { :errors => @user.errors}, status: 422
    end
  end
end