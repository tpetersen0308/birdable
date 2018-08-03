# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

taxonomies = BirdScraper.scrape_taxonomies("https://www.audubon.org/bird-guide")
regions = BirdScraper.scrape_regions("https://www.audubon.org/bird-guide")
bird_names_by_region = BirdScraper.scrape_bird_names_by_region(regions)
birds = []

taxonomies.each do |family_tid, family_name|
  birds.concat(BirdScraper.scrape_birds_by_family_tid(family_tid, family_name))
end

regions.each{|region_tid, region_name| Region.create(name: region_name)}

birds.each{|bird| Bird.create(bird)}

Region.all.each do |region|
  bird_names_by_region[region].map do |reg, bird_names|
    region.birds << bird_names.map{|bird_name| Bird.find_by(:common_name => bird_name)}.compact
    region.save
  end
end