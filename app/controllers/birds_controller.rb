class BirdsController < ApplicationController
  
  def index
    if Region.regions.include?(params[:filter])
      @birds = Bird.by_region(params[:filter])
    elsif Bird.taxonomic_families.include?(params[:filter])
      @birds = Bird.by_family(params[:filter])
    elsif params[:filter]
      @birds = Bird.all.select{|bird| bird.url_safe_attribute("common_name") == params[:filter]}
    else
      @birds = Bird.all.sort_by{|bird| bird.common_name}
    end

    render json: @birds
  end

  def update
    bird = Bird.find_by(:id => params[:id])

    bird.update(bird_params)

    render json: bird
  end
end
