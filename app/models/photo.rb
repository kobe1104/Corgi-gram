class Photo < ActiveRecord::Base
  validates :author_id, :photo_url, presence: true
  validates :photo_url, uniqueness: true
  belongs_to :user
  has_many :comments
end
