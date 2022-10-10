# == Schema Information
#
# Table name: follows
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  follower_id :bigint
#  followee_id :bigint
#
class Follow < ApplicationRecord
    belongs_to :follower,
        class_name: :User,
        foreign_key: :follower_id

    belongs_to :followee,
        class_name: :User,
        foreign_key: :followee_id
end
