class Comment < ActiveRecord::Base
  validates :author_id, :photo_id, presence: true
  belongs_to :photo,
    class_name: "Photo",
    foreign_key: :photo_id,
    primary_key: :id

  belongs_to :user,
   class_name: "User",
   foreign_key: :author_id,
   primary_key: :id
end
