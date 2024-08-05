Rails.application.routes.draw do
  resources :form_answers
  resources :form_questions
  resources :admins

  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }

  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
    root :to => "devise/sessions#new"
    end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  #namespace :administrator do
    #resources :users, only: [:index]
  end


#end
