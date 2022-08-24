class LibrarySerializer < ActiveModel::Serializer
  attributes :id, :library_name
  has_one :user
end
