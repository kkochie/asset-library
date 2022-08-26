class LibrarySerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :asset
end
