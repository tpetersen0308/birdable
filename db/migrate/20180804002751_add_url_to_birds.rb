class AddUrlToBirds < ActiveRecord::Migration[5.1]
  def change
    add_column :birds, :url, :string
  end
end
