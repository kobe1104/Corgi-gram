class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :author_id, null: false
      t.integer :photo_id, null: false
      t.timestamps null: false
    end
  end
end
