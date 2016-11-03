class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.integer :author_id, null: false
      t.string :photo_url, null: false
      t.string :caption
      t.string :type, null: false
      t.timestamps null: false
    end
    add_index :photos, :author_id, unique: true
    add_index :photos, :photo_url, unique: true
  end
end
