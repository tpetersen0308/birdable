class BirdSerializer < ActiveModel::Serializer
  attributes :id, :common_name, :scientific_name, :family, :image, :song, :url
  has_many :regions
end
