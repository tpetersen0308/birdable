require 'httparty'

class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    id_token = params[:tokenObj][:id_token]
    response = HTTParty.get("https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=#{id_token}")
    # check if aud key contains google client id 
    if response["aud"] == ENV['GOOGLE_CLIENT_ID']
      # if so, create/find user and create session
      @user = User.find_or_create_by(:email => response["email"])
      @user.update(:first_name => response["given_name"], :last_name => response["family_name"], :image_url => response["picture"])
      session[:id] = @user.id
      render json: @user, status: 201
    else
      # add error handling here
    end
  end

end
