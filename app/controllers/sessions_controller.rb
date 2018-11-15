class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    id_token = params[:tokenObj][:id_token]
    response = HTTParty.get("https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=#{id_token}")
    # check if aud key contains google client id 
    if response["aud"] == ENV['GOOGLE_CLIENT_ID']
      # if so, create/find user and create session
      @user = User.find_or_create_by(:email => response["email"])
      @user.update(:first_name => response["given_name"], :last_name => response["family_name"], :image_url => response["picture"].gsub("s96-c/photo.jpg", "s400-c/photo.jpg"), :image_url_small => response["picture"])
      @user.update(:correct_answers => 0) unless @user.correct_answers
      @user.update(:incorrect_answers => 0) unless @user.incorrect_answers
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
