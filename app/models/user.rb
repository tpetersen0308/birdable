class User < ApplicationRecord
  has_many :birds_users
  has_many :stats
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

  def top_birds
    top_bird_ids = self.stats.where(correct: true).group_by do |stat| 
      stat.bird_id
    end.sort_by do |k,v| 
      v.size
    end.reverse!.map{|group| group[0]}.slice(0,5)

    return top_bird_ids.map{|bird_id| Bird.find_by(:id => bird_id)}
  end
end
