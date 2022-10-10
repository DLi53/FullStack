# == Schema Information
#
# Table name: boards
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint
#
class Board < ApplicationRecord

    belongs_to :owner,
        class_name: :User,
        foreign_key: :user_id

    has_many :pins,
        dependent: :destroy

    has_many :images_pinned,
        through: :pins,
        source: :image
end
