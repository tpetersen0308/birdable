class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def update
    @user = User.find_by(:id => params[:id])

    if params[:bird_id]
      @user.birds << Bird.find_by(:id => params[:bird_id])
    else
      @user.errors.add(:base, "Could not add favorite.")
    end

    @user.save

    render json: @user
  end
end
