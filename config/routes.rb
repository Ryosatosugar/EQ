Rails.application.routes.draw do
  root :to => "core_pages#top"
  get 'core_pages/top'
  resources :form_answers
  resources :form_questions
  resources :admins
  get "admin_users" => "admins#admin_users"
  get "admin_questions" =>"admins#admin_questions"

  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }
  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
    #root :to => "devise/sessions#new"
  end
 get "users/:id" => "admins#show"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  #namespace :administrator do
    #resources :users, only: [:index]
  # end


end
