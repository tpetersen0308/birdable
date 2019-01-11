class StatSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :bird_id, :region_ids, :correct
end
