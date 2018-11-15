class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    id_token = params[:tokenObj][:id_token]
    response = HTTParty.get("https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=#{id_token}")
    # check if aud key contains google client id 
    if response["aud"] == ENV['GOOGLE_CLIENT_ID']
      # if so, create/find user and create session
      @user = User.from_google_oauth(response)
      session[:id] = @user.id
    else
      @user = User.new
      @user.errors.add(:base, "Invalid login attempt")
    end
    render json: @user
  end

  def destroy
    session.delete :id
  end

end
