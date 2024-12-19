class PrintImage < ApplicationRecord
  belongs_to :user
  belongs_to :category
  belongs_to :event
  has_one_attached :image
  has_many_attached :print_images
end
