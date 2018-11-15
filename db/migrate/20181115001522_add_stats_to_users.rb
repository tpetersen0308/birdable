class AddStatsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :correct_answers, :integer
    add_column :users, :incorrect_answers, :integer
  end
end
