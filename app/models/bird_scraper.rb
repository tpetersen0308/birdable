require 'nokogiri'
require 'open-uri'

class BirdScraper < ApplicationRecord

  def self.get_page(url)
    Nokogiri::HTML(open(url))
  end

  # BirdScraper.scrape_taxonomies associates the tid attributes with family names in a hash so that
  # bird data can be scraped according to taxonomic family.
  def self.scrape_taxonomies(url)
    taxonomies = {}
    self.get_page(url).css("select#edit-field-bird-family-tid option").each.with_index do |taxon, i|
      next if i == 0  
      taxonomies[taxon.attributes.values[0].value] = taxon.text.downcase
    end
    return taxonomies
  end

  # BirdScraper.scrape_regions associates the tid attributes with region names in a hash so that
  # bird data can be scraped according to region.
  def self.scrape_regions(url)
    regions = {}
    self.get_page(url).css("select#edit-field-bird-region-tid option").each.with_index do |region, i|
      next if i == 0  
      regions[region.attributes.values[0].value] = region.text.downcase
    end
    return regions
  end
  
  # BirdScraper.scrape_bird_names_by_region associates each region with its respective bird 
  # names in a hash, so that region data can be easily added to bird records in the database.
  def self.scrape_bird_names_by_region(regions)
    birds_by_region = {}
    
    regions.each do |region_tid, region_name|
      
      page = 0
      url = "https://www.audubon.org/bird-guide?page=" + page.to_s + "&field_bird_family_tid=All&field_bird_region_tid=" + region_tid
      doc = self.get_page(url)

      while(doc.css("div.bird-card-grid-container div.page-" + page.to_s)[0])
        bird_names = doc.css("div.bird-card-grid-container div.page-" + page.to_s).map do |bird|
          next unless bird.css("div.field-name-field-bird-audio li a")[0]
          bird.css("h4.common-name a").text.downcase
        end
        birds_by_region[region_name] ||= []
        birds_by_region[region_name].concat(bird_names)
        page += 1
        url = "https://www.audubon.org/bird-guide?page=" + page.to_s + "&field_bird_family_tid=All&field_bird_region_tid=" + region_tid
        doc = self.get_page(url)
      end
    end
    return birds_by_region
  end

  # BirdScraper.scrape_birds_by_family_tid scrapes bird data by taxonomic family, so that 
  # bird records can be properly associated with their taxonomic families. 
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
