class Region < ApplicationRecord
  has_many :birds_regions
  has_many :birds, through: :birds_regions

  def url_safe_name
    self.name.gsub(' ', '-').gsub(/[^a-z\-]/, '')
  end
end
