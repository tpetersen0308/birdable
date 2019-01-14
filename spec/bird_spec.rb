require "rails_helper"

describe Bird do
  bird = Bird.new(
    common_name: "black-footed albatross", 
    scientific_name: "phoebastria nigripes", 
    image: "https://cdn.audubon.org/cdn/farfuture/onl3tDMdXUmZ...", 
    song: "https://cdn.audubon.org/cdn/farfuture/FddSaHlvdtcl...",
    family: "albatrosses", 
    url: "https://www.audubon.org/field-guide/bird/black-foo...", 
    correct_answers: 0, 
    incorrect_answers: 0)
  
  bird.regions << [Region.new(name: "california"), Region.new(name: "northwest"), Region.new(name: "alaska and the north"), Region.new(name: "western canada")]

  describe "attributes" do
    
    describe "common name" do
      it "exists" do
        expect(bird.attributes.keys).to include("common_name")
      end

      it "is a string" do
        expect(bird.common_name.class).to eq String
      end
    end

    describe "scientific name" do
      it "exists" do
        expect(bird.attributes.keys).to include("scientific_name")
      end

      it "is a string" do
        expect(bird.scientific_name.class).to eq String
      end
    end

    describe "image url" do
      it "exists" do
        expect(bird.attributes.keys).to include("image")
      end

      it "is a string" do
        expect(bird.image.class).to eq String
      end
    end

    describe "song url" do
      it "exists" do
        expect(bird.attributes.keys).to include("song")
      end

      it "is a string" do
        expect(bird.song.class).to eq String
      end
    end
  end
end