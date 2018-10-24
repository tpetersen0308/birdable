class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @user = User.ci_find("email", params[:user][:email])
  
    if @user.class == User && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
    else
      @user = User.new
      @user.errors.add(:base, "The email or password you entered is incorrect")
    end
    render json: @user, status: 201
  end
end
