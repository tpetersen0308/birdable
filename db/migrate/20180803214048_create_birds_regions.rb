class CreateBirdsRegions < ActiveRecord::Migration[5.1]
  def change
    create_table :birds_regions do |t|
      t.belongs_to :bird, foreign_key: true
      t.belongs_to :region, foreign_key: true

      t.timestamps
    end
  end
end
