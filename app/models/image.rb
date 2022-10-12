# == Schema Information
#
# Table name: images
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  uploader_id :bigint
#
class Image < ApplicationRecord

    has_one_attached :photo

    belongs_to :uploader,
        class_name: :User,
        foreign_key: :uploader_id

    has_many :comments,
        class_name: :Comment,
        foreign_key: :image_id,
        dependent: :destroy

    has_many :pins,
        dependent: :destroy

    has_many :boards,
        through: :pins,
        source: :board

end
