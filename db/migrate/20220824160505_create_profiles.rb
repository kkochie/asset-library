class CreateProfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :profiles do |t|
      t.string :role
      t.string :location
      t.string :full_name
      t.string :avatar_url
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
