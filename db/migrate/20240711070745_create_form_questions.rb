class CreateFormQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :form_questions do |t|
      t.string :name_form_question
      t.string :subject_form_question
      t.text :content_form_question
      t.string :image_form_question
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
