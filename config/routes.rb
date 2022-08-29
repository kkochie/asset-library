Rails.application.routes.draw do
  
  
  resources :libraries, only: :index
  resources :profiles, only: [:index, :create, :update]
  resources :assets
  resources :users, only: [:show, :create]
 
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  # Fallback
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
      
end
