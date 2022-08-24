class User < ApplicationRecord
  has_secure_password
  
  has_one :profile
  has_many :libraries
  has_many :assets, through: :libraries
  
  validates :username, presence: true, uniqueness: true

end
