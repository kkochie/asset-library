class Asset < ApplicationRecord
  has_many :libraries, dependent: :destroy
  has_one_attached :image_data
end
