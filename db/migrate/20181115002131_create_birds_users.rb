class CreateBirdsUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :birds_users do |t|
      t.integer :user_id
      t.integer :bird_id
      t.timestamps
    end
  end
end
