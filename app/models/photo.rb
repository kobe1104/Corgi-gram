class Photo < ActiveRecord::Base
  validates :author_id, :photo_url, presence: true
  validates :photo_url, uniqueness: true

  belongs_to :user,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id

  has_many :comments,
    class_name: "Comment",
    foreign_key: :photo_id,
    primary_key: :id

  has_many :likes,
   class_name: "Like",
   foreign_key: :photo_id,
   primary_key: :id
end
