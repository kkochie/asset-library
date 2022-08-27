class Asset < ApplicationRecord
  has_many :libraries, dependent: :destroy
  has_one_attached :attachment
end
