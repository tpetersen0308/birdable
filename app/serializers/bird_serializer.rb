class BirdSerializer < ActiveModel::Serializer
  attributes :id, :common_name, :scientific_name, :family, :image, :song, :url, :correct_answers, :incorrect_answers
  has_many :regions
  has_many :stats
end
