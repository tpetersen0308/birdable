class StatSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :bird_id, :correct
end
