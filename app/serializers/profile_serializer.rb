class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :avatar, :bio
  has_one :user
end
