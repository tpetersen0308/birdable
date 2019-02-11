require "json"

class BirdsController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  # BirdsController#index returns a collection of birds based on filter param, if present,
  # and returns the entire collection of birds if no filter param is present.
  def index

    if !!params["filter"]
      filters = JSON.parse(params["filter"])

      @birds = filters["families"].map{|family| Bird.by_family(family)}
      @birds << filters["regions"].map{|region| Bird.by_region(region)}
      @birds << Bird.where({id: filters["favorites"]})
      @birds = @birds.flatten.uniq
  
      if @birds.length == 0
        @birds = Bird.all
      end
  
    else
      @birds = Bird.find_by(id: 1 + rand(Bird.last.id))
    end
    
    render json: @birds
  end
end
