class Bird < ApplicationRecord
  has_many :birds_regions
  has_many :regions, through: :birds_regions
  after_initialize :add_url
  include Formattable

  TAXONOMIC_FAMILIES = self.all.map(&:family).compact.uniq
  REGIONS = Region.all.map(&:name).compact.uniq

  def add_url
    self.update(url: self.audubon_url)
  end 

  def audubon_url
    "https://www.audubon.org/field-guide/bird/" + self.url_safe_attribute("common_name")
  end

  def self.by_region(region_name)
    self.all.select do |bird| 
      bird.regions.map{|region| region.url_safe_attribute("name")}.include?(region_name)
    end.sort_by{|bird| bird.common_name}
  end
end
