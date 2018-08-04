class BirdsController < ApplicationController
  
  def index
    @birds = Bird.all

    render json: @birds
  end

  def show
    @bird = Bird.all.select{|bird| bird.url_safe_common_name == params[:common_name]}

    render json: @bird
  end
end
