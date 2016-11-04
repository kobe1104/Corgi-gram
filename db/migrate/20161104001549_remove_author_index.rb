class RemoveAuthorIndex < ActiveRecord::Migration
  def change
    remove_index :photos, :author_id
  end
end
