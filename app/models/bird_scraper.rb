class BirdScraper < ApplicationRecord

  def self.get_page(url)
    Nokogiri::HTML(open(url))
  end

end
