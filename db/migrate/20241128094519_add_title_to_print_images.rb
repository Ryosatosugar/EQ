class AddTitleToPrintImages < ActiveRecord::Migration[6.1]
  def change
    add_column :print_images, :title, :string
  end
end
