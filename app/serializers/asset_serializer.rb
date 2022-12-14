class AssetSerializer < ActiveModel::Serializer
include Rails.application.routes.url_helpers
  attributes :id, :title, :caption, :source, :url, :image_data

  def image_data
    rails_blob_path(object.image_data, only_path: true) if object.image_data.attached?
  end
end
