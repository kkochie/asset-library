class Profile < ApplicationRecord
  belongs_to :user

  validates :role, :full_name, presence: true
end
