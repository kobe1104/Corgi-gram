class User < ActiveRecord::Base
  attr_reader :password

  validates :username, :password_digest, :session_token, :email, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6} ,allow_nil: true

  has_many :photos,
    class_name: "Photo",
    foreign_key: :author_id,
    primary_key: :id

  has_many :comments,
   class_name: "Comment",
   foreign_key: :author_id,
   primary_key: :id

   has_many :follows,
    class_name: "Follow",
    foreign_key: :followed_id,
    primary_key: :id

   has_many :following,
    class_name: "Follow",
    foreign_key: :follower_id,
    primary_key: :id

    has_many :followee,
      through: :following,
      source: :user

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user
      user.valid_password?(password) ? user : nil
    else
      nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
