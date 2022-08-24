class Asset < ApplicationRecord
  belongs_to :library

  validates :asset_url, :description, presence: true
  validates :description, length: { minimum: 50 }
end
