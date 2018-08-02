class CreateBirds < ActiveRecord::Migration[5.1]
  def change
    create_table :birds do |t|
      t.string :common_name
      t.string :scientific_name
      t.string :image
      t.string :song
      t.string :region

      t.timestamps
    end
  end
end
