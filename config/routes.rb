Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :jason} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :photos
    resources :comments
    resources :likes
  end
end
