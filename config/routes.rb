Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "/birds" => "birds#index"
  get "/birds/:common_name" => "birds#show"
  
end
