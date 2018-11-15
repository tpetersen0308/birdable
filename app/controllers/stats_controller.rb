class StatsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @stat = Stat.create(:correct => params[:correct])
    @stat.bird = Bird.find_by(:id => params[:bird_id])
    
    if params[:user_id]
      @stat.user = User.find_by(:id => params[:user_id])
    end
    
    @stat.save(validate: false)
    render json: @stat
  end
end
