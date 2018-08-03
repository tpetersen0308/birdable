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
  bird_names_by_region[region.name].each do |bird_name|
    bird = Bird.find_by(:common_name => bird_name) 
    if bird
      region.birds << bird
      region.save
    end
  end
end