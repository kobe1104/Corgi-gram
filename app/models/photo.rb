class Photo < ActiveRecord::Base
  validates :author_id, :photo_url, presence: true
  belongs_to :user
end
