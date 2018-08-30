class AddCorrectAndIncorrectAnswersToBirds < ActiveRecord::Migration[5.1]
  def change
    change_table :birds do |t|
      t.integer :correct_answers
      t.integer :incorrect_answers
    end
  end
end
