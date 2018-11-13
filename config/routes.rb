Rails.application.routes.draw do
  resources :users, only: [:create]
  delete "/sessions" => "sessions#delete"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope '/api' do
    scope '/v1' do
      get "/birds" => "birds#index"
      get "/birds/:filter" => "birds#index"
      put "/birds/:id" => "birds#update"
    end
  end
end
