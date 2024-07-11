class FormQuestion < ApplicationRecord
  belongs_to :user, optional: true
  has_many :form_answers
end
