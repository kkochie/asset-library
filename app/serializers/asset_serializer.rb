class AssetSerializer < ActiveModel::Serializer
  attributes :id, :title, :caption, :source, :url
end
