# DELETE existing tables
Profile.destroy_all
Library.destroy_all
Asset.destroy_all
User.destroy_all


# CREATE Users
puts "Seeding users..."
user1 = User.create(
  username: "emmett",
  password: "happy"
)

user2 = User.create(
  username: "frida",
  password: "sweet"
)

# CREATE Assets
puts "Seeding assets..."
asset1 = Asset.create(
  title: Faker::Hipster.word,
  caption: Faker::Hipster.paragraph,
  source: Faker::GreekPhilosophers.name,
  url: Faker::LoremFlickr.image
)

asset2 = Asset.create(
  title: Faker::Hipster.word,
  caption: Faker::Hipster.paragraph,
  source: Faker::GreekPhilosophers.name,
  url: Faker::LoremFlickr.image
)

asset3 = Asset.create(
  title: Faker::Hipster.word,
  caption: Faker::Hipster.paragraph,
  source: Faker::GreekPhilosophers.name,
  url: Faker::LoremFlickr.image
)

asset4 = Asset.create(
  title: Faker::Hipster.word,
  caption: Faker::Hipster.paragraph,
  source: Faker::GreekPhilosophers.name,
  url: Faker::LoremFlickr.image
)

asset5 = Asset.create(
  title: Faker::Hipster.word,
  caption: Faker::Hipster.paragraph,
  source: Faker::GreekPhilosophers.name,
  url: Faker::LoremFlickr.image
)

asset6 = Asset.create(
  title: Faker::Hipster.word,
  caption: Faker::Hipster.paragraph,
  source: Faker::GreekPhilosophers.name,
  url: Faker::LoremFlickr.image
)

asset7 = Asset.create(
  title: Faker::Hipster.word,
  caption: Faker::Hipster.paragraph,
  source: Faker::GreekPhilosophers.name,
  url: Faker::LoremFlickr.image
)

asset8 = Asset.create(
  title: Faker::Hipster.word,
  caption: Faker::Hipster.paragraph,
  source: Faker::GreekPhilosophers.name,
  url: Faker::LoremFlickr.image
)

asset9 = Asset.create(
  title: Faker::Hipster.word,
  caption: Faker::Hipster.paragraph,
  source: Faker::GreekPhilosophers.name,
  url: Faker::LoremFlickr.image
)

asset10 = Asset.create(
  title: Faker::Hipster.word,
  caption: Faker::Hipster.paragraph,
  source: Faker::GreekPhilosophers.name,
  url: Faker::LoremFlickr.image
)

asset11 = Asset.create(
  title: Faker::Hipster.word,
  caption: Faker::Hipster.paragraph,
  source: Faker::GreekPhilosophers.name,
  url: Faker::LoremFlickr.image
)

asset12 = Asset.create(
  title: Faker::Hipster.word,
  caption: Faker::Hipster.paragraph,
  source: Faker::GreekPhilosophers.name,
  url: Faker::LoremFlickr.image
)

asset13 = Asset.create(
  title: Faker::Hipster.word,
  caption: Faker::Hipster.paragraph,
  source: Faker::GreekPhilosophers.name,
  url: Faker::LoremFlickr.image
)

asset14 = Asset.create(
  title: Faker::Hipster.word,
  caption: Faker::Hipster.paragraph,
  source: Faker::GreekPhilosophers.name,
  url: Faker::LoremFlickr.image
)


# CREATE Libraries
puts "Seeding libraries..."
Library.create(user_id: user1.id, asset_id: asset1.id)
Library.create(user_id: user1.id, asset_id: asset2.id)
Library.create(user_id: user1.id, asset_id: asset3.id)
Library.create(user_id: user1.id, asset_id: asset4.id)
Library.create(user_id: user1.id, asset_id: asset5.id)
Library.create(user_id: user1.id, asset_id: asset6.id)
Library.create(user_id: user1.id, asset_id: asset7.id)
Library.create(user_id: user2.id, asset_id: asset8.id)
Library.create(user_id: user2.id, asset_id: asset9.id)
Library.create(user_id: user2.id, asset_id: asset10.id)
Library.create(user_id: user2.id, asset_id: asset11.id)
Library.create(user_id: user2.id, asset_id: asset12.id)
Library.create(user_id: user2.id, asset_id: asset13.id)
Library.create(user_id: user2.id, asset_id: asset14.id)

# CREATE Profiles
puts "Seeding profiles..."
profile1 = Profile.create(
  name: Faker::Name.name,
  location: Faker::Address.city,
  avatar: Faker::Avatar.image,
  bio: Faker::Hacker.say_something_smart,
  user_id: user1.id
)

profile1.avatar_up.attach(
  io: File.open('./public/avatars/fishing.png'),
  filename: 'fishing.png',
  content_type: 'application/png'
)


profile2 = Profile.create(
  name: Faker::Name.name,
  location: Faker::Address.city,
  avatar: Faker::Avatar.image,
  bio: Faker::Hacker.say_something_smart,
  user_id: user2.id
)
profile2.avatar_up.attach(
  io: File.open('./public/avatars/music.png'),
  filename: 'fishing.png',
  content_type: 'application/png'
)


puts "Done seeding!"
