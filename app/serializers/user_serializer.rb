class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :errors
end
