class Comment < ActiveRecord::Base
  validates :author_id, :photo_id, presence: true
  belongs_to :photo
  belongs_to :user,
   class_name: "User",
   foreign_key: :author_id,
   primary_key: :id
end
