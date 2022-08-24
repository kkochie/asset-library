class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :role, :location, :full_name, :avatar_url
  has_one :user
end
