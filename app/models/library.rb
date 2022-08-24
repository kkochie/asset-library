class Library < ApplicationRecord
  belongs_to :user
  has_many :assets

  validates :library_name, presence: true, uniqueness: true
end
