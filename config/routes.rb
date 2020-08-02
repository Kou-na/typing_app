Rails.application.routes.draw do
  root 'static_pages#home'
  get 'top', to: "default_words#default_game"
  get 'game', to: 'words#game'
  devise_for :users
  resources :users, only: [:show, :edit, :update]
  resources :words, only: [:new, :create, :edit, :update, :destroy]
end
