class Follow < ActiveRecord::Base
  validates :follower_id, :followed_id, presence: true

  belongs_to :user,
   class_name: "User",
   foreign_key: :followed_id,
   primary_key: :id
end
