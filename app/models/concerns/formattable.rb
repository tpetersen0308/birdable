# module Formattable provides a method to reformat a string to be url-friendly
module Formattable
  def url_safe_attribute(attr)
    self.send(attr).gsub(' ', '-').gsub(/[^a-z\-]/, '')
  end
end