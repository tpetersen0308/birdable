class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :image_url, :correct_answers, :incorrect_answers
end
