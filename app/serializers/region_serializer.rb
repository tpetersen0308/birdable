class RegionSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :birds
  has_many :stats
end
