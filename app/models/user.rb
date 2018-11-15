class User < ApplicationRecord
  has_many :birds_users
  has_many :birds, through: :birds_users

  def self.from_google_oauth(res)
    self.find_or_create_by(:email => res["email"]) do |u|
      u.first_name = res["given_name"]
      u.last_name = res["family_name"]
      u.image_url = res["picture"].gsub("s96-c/photo.jpg", "s400-c/photo.jpg")
      u.image_url_small = res["picture"]
      u.correct_answers = 0 unless u.correct_answers
      u.incorrect_answers = 0 unless u.incorrect_answers
    end
  end
end
