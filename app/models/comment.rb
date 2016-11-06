class Comment < ActiveRecord::Base
  validates :author_id, :photo_id, presence: true
  belongs_to :photo
end
