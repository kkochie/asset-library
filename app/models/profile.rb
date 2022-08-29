class Profile < ApplicationRecord
  belongs_to :user

  validates :name, :location, :bio, presence: true
end
