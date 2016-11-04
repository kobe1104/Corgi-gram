class RemoveAuthorIdUnique < ActiveRecord::Migration
  def change
    change_column :photos, :author_id, :integer, unique: false
  end
end
