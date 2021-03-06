Rails.application.routes.draw do
  delete "/sessions" => "sessions#destroy"
  post "/sessions" => "sessions#create"
  put "/users/:id" => "users#update"
  post "/stats/birds/:bird_id" => "stats#create"
  post "/stats/birds/:bird_id/users/:user_id" => "stats#create"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope '/api' do
    scope '/v1' do
      get "/birds" => "birds#index"
      get "/birds/:filter" => "birds#index"
      get "/users/:user_id/birds/top-birds" => "birds#index"
      put "/birds/:id" => "birds#update"
    end
  end
end
