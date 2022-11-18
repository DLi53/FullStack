# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  has_secure_password
  validates :username, uniqueness: true, length: { in: 3..20 }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  before_validation :ensure_session_token

  has_many :boards,
    class_name: :Board,
    foreign_key: :user_id,
    dependent: :destroy
  
  has_many :comments,
    class_name: :Comment,
    foreign_key: :commenter_id,
    dependent: :destroy

  has_many :uploads,
    class_name: :Image,
    foreign_key: :uploader_id,
    dependent: :destroy

  has_many :followers_connect,
    class_name: :Follow,
    foreign_key: :followee_id,
    dependent: :destroy

  has_many :following_connect,
    class_name: :Follow,
    foreign_key: :follower_id,
    dependent: :destroy
    
  has_many :followers,
    through: :followers_connect,
    source: :follower
    
  has_many :following,
    through: :following_connect,
    source: :followee

  has_many :pins,
    through: :boards,
    source: :pins

  has_one_attached :profilepic


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user&.authenticate(password) ? user : nil
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    save!
    session_token
  end

  private
  def generate_unique_session_token
    token = SecureRandom::urlsafe_base64
    while User.exists?(session_token: token)
      token = SecureRandom::urlsafe_base64
    end
    return token
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token  
  end
end
