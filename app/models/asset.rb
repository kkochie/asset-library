class Asset < ApplicationRecord
  has_many :libraries, dependent: :destroy
end
