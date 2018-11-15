class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def update
    @user = User.find_by(:id => params[:id])

    if params[:correct]
      @user.correct_answers += 1
    else
      @user.incorrect_answers += 1
    end

    @user.save

    render json: @user
  end
end
