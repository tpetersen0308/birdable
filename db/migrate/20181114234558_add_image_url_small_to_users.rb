class AddImageUrlSmallToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :image_url_small, :string
  end
end
