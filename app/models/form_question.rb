class FormQuestion < ApplicationRecord
  belongs_to :user, optional: true
end
