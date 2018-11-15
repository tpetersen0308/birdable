class StatsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @stat = Stat.new

    if params[:user_id]
      @stat = Stat.create(:correct => params[:correct == "true"])
      @stat.user = User.find_by(:id => params[:user_id])
    end

    @stat.bird = Bird.find_by(:id => params[:bird_id])
    @stat.save

    render json: @stat
  end
end
