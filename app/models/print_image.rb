class PrintImage < ApplicationRecord
  belongs_to :user
  belongs_to :category
  belongs_to :event
  has_one_attached :thumbnail_image
  has_many_attached :image_for_download

  validates :category_id, presence: true
  validates :event_id, presence: true
end
