Rails.application.routes.draw do  
  get 'intentions/new_intention'
  get 'intentions/index'
  get '/entity' => 'entities#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  match 'create_entity',to: 'entities#create_entity', via: :all
  #match 'create_entity_value',to: 'entities#create_entity_value', via: :post
  match 'delete_entity', to: 'entities#delete_entity', via: :delete
  match 'delete_entity_value', to: 'entities#delete_entity_value', via: :get
  match 'update_entity', to: 'entities#update_entity', via: :patch
  #match 'edit_value', to: 'entities#edit_value', via: :get
  match 'update_entity_value', to: 'entities#update_entity_value', via: :patch
  match 'entity_value', to: 'entities#show_info', via: :get
  match 'release_version', to: 'entities#release_version', via: :post
  match 'import_entity', to: 'entities#import_entity', via: :post
  match 'datatable_entity_keyword', to: 'entities#datatable_entity_keyword', via: :get
  resource :entity

  
  resource :exports
  get '/export' => 'exports#index'
  match 'datatable_exports', to: 'exports#datatable_exports', via: :get
  match 'download_exports',to: 'exports#download_exports', via: :post
  match 'create_exports',to: 'exports#create_exports', via: :post
  match 'revert_version_exports',to: 'exports#revert_version_exports', via: :post 

  match 'add_dictionary', to: 'dictionary#add_dictionary', via: :get
  match 'release_dictionary', to: 'dictionary#release_dictionary', via: :post
  match 'create_dictionary', to: 'dictionary#create_dictionary', via: :post
  match 'edit_dictionary', to: 'dictionary#edit_dictionary', via: :get
  match 'update_dictionary', to: 'dictionary#update_dictionary', via: :patch
  match 'delete_dictionary', to: 'dictionary#delete_dictionary', via: :get  
  get '/dictionary' => 'dictionary#index'
  match 'datatable_dictionary', to: 'dictionary#datatable_dictionary', via: :get

  get '/keyword' => 'keyword#index' 
  resource :keyword

  get '/amivoice_ai' => 'login_system#index'
  match '/api/auth_check', to: 'login_system#login', via: :get
  match 'login_auth', to: 'login_system#login_auth', via: :post
  match 'logout_auth', to: 'login_system#logout_auth', via: :delete
  match '/api/logout', to: 'login_system#logout_auth', via: :get
  match 'check_auth', to: 'login_system#check_auth', via: :post
  root :to => 'login_system#index' 
  
  get '/intentions' => 'intentions#index'
  resource :intentions
  match 'datatable_intention', to: 'intentions#datatable_intention', via: :get
 # match 'new_intention', to: 'intentions#new_intention', via: :get
  #match 'update_intention', to: 'intentions#update_intention', via: :put
  match 'delete_intentions', to: 'intentions#delete_intention', via: :delete
  match 'delete_select_intentions', to: 'intentions#delete_select_intention', via: :get
  match 'intention_value', to: 'intentions#show_info', via: :get
 # match 'new', to: 'intentions#new', via: :post
end
