class AssetSerializer < ActiveModel::Serializer
  attributes :id, :asset_url, :description, :keywords, :source
  has_one :library
end
