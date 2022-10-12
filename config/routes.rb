Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create] do
      resources :boards
    end
    resources :images
    resource :session, only: [:create, :destroy, :show]
  end

  
  get '*path', to: "static_pages#frontend_index"
end
