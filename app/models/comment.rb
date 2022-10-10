# == Schema Information
#
# Table name: comments
#
#  id           :bigint           not null, primary key
#  description  :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  commenter_id :bigint
#  image_id     :bigint
#
class Comment < ApplicationRecord
    belongs_to :commenter,
        class_name: :User,
        foreign_key: :commenter_id

    belongs_to :image,
        class_name: :Image,
        foreign_key: :image_id
end
