class CaptionTocaptions < ActiveRecord::Migration
  def change
    rename_column :photos, :caption, :captions
  end
end
