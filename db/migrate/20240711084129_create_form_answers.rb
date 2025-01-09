class CreateFormAnswers < ActiveRecord::Migration[6.1]
  def change
    create_table :form_answers do |t|
      t.references :user, foreign_key: true
      
      t.string :name_form_answer
      t.text :content_form_answer
      t.string :image_form_answer
      t.boolean :best_answer_form_answer

      t.timestamps
    end
  end
end
