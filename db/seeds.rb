# DELETE existing tables
Profile.destroy_all
Asset.destroy_all
Library.destroy_all
User.destroy_all


# CREATE Users
puts "Seeding users..."
5.times{ User.create(
  username: Faker::Internet.username,
  password_digest: BCrypt::Password.create('Password')
)}

# CREATE Libraries
puts "Seeding libraries..."
Library.create(
  library_name: Faker::Hipster.word,
  user_id: 1
)

Library.create(
  library_name: Faker::Hipster.word,
  user_id: 2
)

Library.create(
  library_name: Faker::Hipster.word,
  user_id: 3
)

Library.create(
  library_name: Faker::Hipster.word,
  user_id: 4
)

Library.create(
  library_name: Faker::Hipster.word,
  user_id: 5
)

# CREATE Assets
puts "Seeding assets..."
20.times{ Asset.create(
  asset_url: Faker::LoremFlickr.image,
  description: Faker::Hipster.paragraph,
  keywords: Faker::Hipster.words,
  source: Faker::GreekPhilosophers.name,
  library_id: Faker::Number.between(from: 1, to: 5)
)}

# CREATE Profiles
puts "Seeding profiles..."
Profile.create(
  role: Faker::Job.position,
  location: Faker::Address.city,
  full_name: Faker::Name.name,
  avatar_url: Faker::Avatar.image,
  user_id: 1
)

Profile.create(
  role: Faker::Job.position,
  location: Faker::Address.city,
  full_name: Faker::Name.name,
  avatar_url: Faker::Avatar.image,
  user_id: 2
)

Profile.create(
  role: Faker::Job.position,
  location: Faker::Address.city,
  full_name: Faker::Name.name,
  avatar_url: Faker::Avatar.image,
  user_id: 3
)

Profile.create(
  role: Faker::Job.position,
  location: Faker::Address.city,
  full_name: Faker::Name.name,
  avatar_url: Faker::Avatar.image,
  user_id: 4
)

Profile.create(
  role: Faker::Job.position,
  location: Faker::Address.city,
  full_name: Faker::Name.name,
  avatar_url: Faker::Avatar.image,
  user_id: 5
)

puts "Done seeding!"
