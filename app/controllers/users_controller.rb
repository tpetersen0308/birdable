require 'httparty'

class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    id_token = params[:tokenObj][:id_token]
    response = HTTParty.get("https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=#{id_token}")
    # check if aud key contains google client id 
    # if so, create/find user and create session
  end

end
