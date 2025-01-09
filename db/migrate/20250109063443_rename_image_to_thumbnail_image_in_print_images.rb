class RenameImageToThumbnailImageInPrintImages < ActiveRecord::Migration[6.1]
  def change
    rename_column :print_images, :image, :thumbnail_image
  end
end
