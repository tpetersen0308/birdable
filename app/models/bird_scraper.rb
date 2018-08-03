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

  def self.scrape_regions(url)
    regions = {}
    self.get_page(url).css("select#edit-field-bird-region-tid option").each.with_index do |region, i|
      next if i == 0  
      regions[region.attributes.values[0].value] = region.text
    end
    return regions
  end

  def self.scrape_birds_by_family_tid(family_tid, family_name)
    url = "https://www.audubon.org/bird-guide?field_bird_family_tid=" + family_tid
    doc = self.get_page(url)
    birds = []
    doc.css("div.bird-card-grid-container div.page-0").map do |bird|
      next unless bird.css("div.field-name-field-bird-audio li a")[0]
      new_bird = {
        common_name: bird.css("h4.common-name a").text.downcase,
        scientific_name: bird.css("p.scientific-name").text.strip.downcase,
        image: bird.css("img")[0].attributes.values[0].value,
        song: bird.css("div.field-name-field-bird-audio li a")[0].attributes["href"].value,
        family: family_name.downcase
      }
      birds.push(new_bird)

    end
    return birds
  end
end
