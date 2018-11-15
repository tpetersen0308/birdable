class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :image_url
  has_many :birds
  has_many :stats
end
