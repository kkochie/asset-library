class CreateAssets < ActiveRecord::Migration[6.1]
  def change
    create_table :assets do |t|
      t.string :asset_url
      t.string :description
      t.string :keywords
      t.string :source
      t.belongs_to :library, null: false, foreign_key: true

      t.timestamps
    end
  end
end
