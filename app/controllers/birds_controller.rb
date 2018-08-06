class BirdsController < ApplicationController
  
  def index
    if params[:region]
      @birds = Bird.all.select do |bird| 
        bird.regions.map{|region| region.url_safe_name}.include?(params[:region])
      end.sort_by{|bird| bird.common_name}
    else
      @birds = Bird.all.sort_by{|bird| bird.common_name}
    end

    render json: @birds
  end

  def show
    @bird = Bird.all.select{|bird| bird.url_safe_common_name == params[:common_name]}

    render json: @bird
  end
end
