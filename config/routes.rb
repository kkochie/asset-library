Rails.application.routes.draw do
  
  
  resources :libraries
  resources :profiles
  resources :assets
  resources :users
 
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  # Fallback
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
      
end
