class CreateLibraries < ActiveRecord::Migration[6.1]
  def change
    create_table :libraries do |t|
      t.string :library_name
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
