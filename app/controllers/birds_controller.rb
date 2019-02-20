require "json"

class BirdsController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def index
    if !!params["filter"]
      filters = JSON.parse(params["filter"])

      @birds_by_family = filters["families"].map{|family| Bird.by_family(family)}.flatten
      @birds_by_region = filters["regions"].map{|region| Bird.by_region(region)}.flatten
      @favorite_birds = Bird.where({id: filters["favorites"]})

      if @birds_by_family.length == 0 || @birds_by_region.length == 0
        @birds = @birds_by_family.concat(@birds_by_region)
      else
        @birds = @birds_by_family & @birds_by_region
      end
      
      @birds << Bird.where({id: filters["favorites"]})

      @birds = @birds.flatten.uniq
  
      if @birds.length == 0
        @birds = Bird.all
      end
  
    elsif params[:user_id]
      @birds = User.find_by(:id => params[:user_id]).top_birds
    else
      @birds = Bird.find_by(id: 1 + rand(Bird.last.id))
    end
    
    render json: @birds
  end
end
