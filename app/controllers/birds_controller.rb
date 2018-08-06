class BirdsController < ApplicationController
  
  def index
    if Region.regions.include?(params[:filter])
      @birds = Bird.by_region(params[:filter])
    elsif params[:filter]
      @birds = Bird.by_family(params[:filter])
    else
      @birds = Bird.all.sort_by{|bird| bird.common_name}
    end

    render json: @birds
  end

  def show
    @bird = Bird.all.select{|bird| bird.url_safe_attribute("common_name") == params[:common_name]}

    render json: @bird
  end
end
