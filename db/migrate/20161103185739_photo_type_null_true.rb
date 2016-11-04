class PhotoTypeNullTrue < ActiveRecord::Migration
  def change
    change_column :photos, :type, :string, null: true
  end
end
