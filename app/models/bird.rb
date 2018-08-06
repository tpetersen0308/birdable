class Bird < ApplicationRecord
  has_many :birds_regions
  has_many :regions, through: :birds_regions
  after_initialize :add_url
  include Formattable

  def add_url
    self.update(url: self.audubon_url)
  end 

  def audubon_url
    "https://www.audubon.org/field-guide/bird/" + self.url_safe_attribute("common_name")
  end

  # def url_safe_common_name
  #   self.common_name.gsub(' ', '-').gsub(/[^a-z\-]/, '')
  # end

end
