class AddPrintImageToPrintImages < ActiveRecord::Migration[6.1]
  def change
    add_column :print_images, :print_image, :text
  end
end
