class AddExplanationToPrintImages < ActiveRecord::Migration[6.1]
  def change
    add_column :print_images, :explanation, :text
  end
end
