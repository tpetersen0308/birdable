class BirdsController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  # BirdsController#index returns a collection of birds based on filter param, if present,
  # and returns the entire collection of birds if no filter param is present.
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

  # BirdsController#update updates the answer stats of a given bird in the database
  def update
    @bird = Bird.find_by(:id => params[:id])

    if params[:correct]
      @bird.correct_answers += 1
    else
      @bird.incorrect_answers += 1
    end

    @bird.save

    render json: @bird
  end
end
