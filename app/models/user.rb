class User < ApplicationRecord
  # Include default devise modules. Others available are:
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :lockable, :timeoutable, :trackable, :confirmable and :omniauthable

  has_many :form_questions
  has_many :form_answers
  has_many :print_images

  validates :name, presence: true
end
