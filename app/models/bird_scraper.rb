require 'nokogiri'
require 'open-uri'

class BirdScraper < ApplicationRecord

  def self.get_page(url)
    Nokogiri::HTML(open(url))
  end

  def self.scrape_taxonomies(url)
    taxonomies = {}
    self.get_page(url).css("select#edit-field-bird-family-tid option").each.with_index do |taxon, i|
      next if i == 0  
      taxonomies[taxon.attributes.values[0].value] = taxon.text
    end
    return taxonomies
  end

  def self.scrape_birds_by_family_tid(family_tid)
    
  end
end
