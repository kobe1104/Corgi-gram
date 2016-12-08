Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :jason} do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :photos
    resources :comments
    resources :likes
    resources :follows
    resources :search
  end
end
