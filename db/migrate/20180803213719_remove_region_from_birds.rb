class RemoveRegionFromBirds < ActiveRecord::Migration[5.1]
  def change
    remove_column :birds, :region
  end
end
