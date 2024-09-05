class FormQuestion < ApplicationRecord
  belongs_to :user, optional: true
  has_many :form_answers

  def self.ransackable_attributes(auth_object = nil)
    ["content_form_question", "created_at", "id", "image_form_question", "name_form_question", "subject_form_question", "updated_at", "user_id"]
  end

end
