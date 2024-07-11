class FormAnswer < ApplicationRecord
  belongs_to :user
  belongs_to :form_question
end
