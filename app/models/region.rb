class Region < ApplicationRecord
  has_many :birds_regions
  has_many :birds, through: :birds_regions
end
