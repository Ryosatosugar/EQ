class CreateSinglePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :single_posts do |t|
      t.text :single_post_image
      t.references :user, null: false, foreign_key: true
      t.references :category, null: false, foreign_key: true
      t.references :event, null: false, foreign_key: true
      t.string :name
      t.string :subject
      t.text :content

      t.timestamps
    end
  end
end
