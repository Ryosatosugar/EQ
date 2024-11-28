class CreatePrintImages < ActiveRecord::Migration[6.1]
  def change
    create_table :print_images do |t|
      t.text :image
      t.references :user, null: false, foreign_key: true
      t.references :category, null: false, foreign_key: true
      t.references :event, null: false, foreign_key: true

      t.timestamps
    end
  end
end
