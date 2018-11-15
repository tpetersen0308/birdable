class User < ApplicationRecord
  has_many :birds_users
  has_many :birds, through: :birds_users
end
