class RenamePrintImageToImageForDownloadInPrintImages < ActiveRecord::Migration[6.1]
  def change
    rename_column :print_images, :print_image, :image_for_download
  end
end
