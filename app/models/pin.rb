# == Schema Information
#
# Table name: pins
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  image_id   :bigint
#  board_id   :bigint
#
class Pin < ApplicationRecord

    belongs_to :image

    belongs_to :board

end
