class Bird < ApplicationRecord
  has_many :birds_regions
  has_many :regions, through: :birds_regions

  def audubon_url
    "https://www.audubon.org/field-guide/bird/" + self.common_name.gsub(' ', '-').gsub(/[^a-z\-]/, '')
  end
end
