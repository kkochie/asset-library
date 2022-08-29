class Asset < ApplicationRecord
  has_many :libraries, dependent: :destroy
  has_one_attached :image_data

  validates :caption, :title, :source, presence: true

end
