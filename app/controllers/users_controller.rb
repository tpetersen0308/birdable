class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def update
    @user = User.find_by(:id => params[:id])
    bird = Bird.find_by(:id => params[:bird_id])
    if params[:add] == true
      @user.birds << bird
    elsif params[:add] == false
      @user.birds.delete(bird)
    else
      @user.errors.add(:base, "Could not update favorites.")
    end
    @user.save

    render json: @user
  end
end
