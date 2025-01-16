class PrintImage < ApplicationRecord
  belongs_to :user
  belongs_to :category
  belongs_to :event
  has_one_attached :thumbnail_image
  has_many_attached :image_for_download
end
