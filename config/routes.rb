Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post "/login" => "sessions#create"
  
  scope '/api' do
    scope '/v1' do
      get "/birds" => "birds#index"
      get "/birds/:filter" => "birds#index"
      put "/birds/:id" => "birds#update"
      resources :users
    end
  end
end
