class Region < ApplicationRecord
  has_many :birds_regions
  has_many :stats_regions
  has_many :birds, through: :birds_regions
  has_many :stats, through: :stats_regions
  include Formattable

  REGIONS = ["alaska-and-the-north", "california", "eastern-canada", "florida", "great-lakes", "mid-atlantic", "new-england", "northwest", "plains", "rocky-mountains", "southeast", "southwest", "texas", "western-canada"]

  def self.regions
    REGIONS
  end
end
