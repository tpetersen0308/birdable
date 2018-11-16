class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :image_url, :bird_ids
  has_many :birds
  has_many :stats
end
