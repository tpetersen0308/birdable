require "rails_helper"

describe Bird do 
  it "has a :common_name attribute" do
    bird = Bird.new(:common_name => "Sedge Wren")
    expect(bird.attributes.keys).to include("common_name")
  end

end