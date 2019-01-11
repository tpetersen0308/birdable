class CreateStatsRegions < ActiveRecord::Migration[5.1]
  def change
    create_table :stats_regions do |t|
      t.integer :stat_id
      t.integer :region_id
      t.timestamps
    end
  end
end
