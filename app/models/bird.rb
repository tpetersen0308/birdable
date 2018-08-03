class Bird < ApplicationRecord
  has_many :birds_regions
  has_many :regions, through: :birds_regions
end
