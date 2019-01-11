class Stat < ApplicationRecord
  belongs_to :user
  belongs_to :bird
  has_many :stats_regions
  has_many :regions, through: :stats_regions
end
