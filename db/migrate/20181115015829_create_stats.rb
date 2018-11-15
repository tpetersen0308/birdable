class CreateStats < ActiveRecord::Migration[5.1]
  def change
    create_table :stats do |t|
      t.integer :user_id
      t.integer :bird_id
      t.boolean :correct
      t.timestamps
    end
  end
end
