class CreateAssets < ActiveRecord::Migration[6.1]
  def change
    create_table :assets do |t|
      t.string :title
      t.string :caption
      t.string :source
      t.string :url

      t.timestamps
    end
  end
end
