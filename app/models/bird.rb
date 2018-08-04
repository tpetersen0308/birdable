class Bird < ApplicationRecord
  has_many :birds_regions
  has_many :regions, through: :birds_regions
  after_initialize :add_url

  def add_url
    self.update(url: self.audubon_url)
  end 

  def audubon_url
    "https://www.audubon.org/field-guide/bird/" + self.common_name.gsub(' ', '-').gsub(/[^a-z\-]/, '')
  end
end
