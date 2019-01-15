require "rails_helper"

describe Bird do
  bird = Bird.new(
    common_name: "black-footed albatross", 
    scientific_name: "phoebastria nigripes", 
    image: "https://cdn.audubon.org/cdn/farfuture/onl3tDMdXUmZ...", 
    song: "https://cdn.audubon.org/cdn/farfuture/FddSaHlvdtcl...",
    family: "albatrosses", 
    correct_answers: 0, 
    incorrect_answers: 0)
  
  bird.regions << [Region.new(name: "california"), Region.new(name: "northwest"), Region.new(name: "alaska and the north"), Region.new(name: "western canada")]

  it "has many regions" do
    expect(Bird.reflect_on_association(:regions).macro).to eq :has_many
  end

  it "has many birds_regions" do
    expect(Bird.reflect_on_association(:birds_regions).macro).to eq :has_many
  end

  describe ".by_region" do 
    it "returns all of the birds associated with a given region" do
      expect(Bird.by_region("california").first).to eq bird
    end
  end

  describe ".by_family" do 
    it "returns all of the birds from a given taxonomic family" do
      expect(Bird.by_family("albatrosses").first).to eq bird
    end
  end

  describe ".audubon_url" do
    it "formats the url path to remove unfriendly characters from the common name attribute and replace spaces with hyphens" do
      new_bird = Bird.new(common_name: "we@##st%er*n !sc889reech-owl")
      expect(new_bird.url).to eq "https://www.audubon.org/field-guide/bird/western-screech-owl"
    end
  end

  describe ".add_url" do
    it "automatically assigns a url for the correct Audubon field guide page when a Bird is instantiated" do
      new_bird = Bird.new(common_name: "western screech-owl")
      expect(new_bird.url).to eq "https://www.audubon.org/field-guide/bird/western-screech-owl"
    end
  end

  describe "attributes" do
    
    describe "common name" do
      it "is an attribute of Bird" do
        expect(bird.attributes.keys).to include("common_name")
      end

      it "is a string" do
        expect(bird.common_name.class).to eq String
      end
    end

    describe "scientific name" do
      it "is an attribute of Bird" do
        expect(bird.attributes.keys).to include("scientific_name")
      end

      it "is a string" do
        expect(bird.scientific_name.class).to eq String
      end
    end

    describe "image url" do
      it "is an attribute of Bird" do
        expect(bird.attributes.keys).to include("image")
      end

      it "is a string" do
        expect(bird.image.class).to eq String
      end
    end

    describe "song url" do
      it "is an attribute of Bird" do
        expect(bird.attributes.keys).to include("song")
      end

      it "is a string" do
        expect(bird.song.class).to eq String
      end
    end

    describe "taxonomic family" do
      it "is an attribute of Bird" do
        expect(bird.attributes.keys).to include("family")
      end

      it "is a string" do
        expect(bird.family.class).to eq String
      end
    end

    describe "audubon url" do
      it "is an attribute of Bird" do
        expect(bird.attributes.keys).to include("url")
      end

      it "is a string" do
        expect(bird.url.class).to eq String
      end

      it "links to a bird show page on the Audubon Field Guide" do
        expect(bird.url).to include "https://www.audubon.org/field-guide/bird"
      end
    end

    describe "correct answers" do
      it "is an attribute of Bird" do
        expect(bird.attributes.keys).to include("correct_answers")
      end

      it "is a string" do
        expect(bird.correct_answers.class).to eq Fixnum
      end
    end

    describe "incorrect answers" do
      it "is an attribute of Bird" do
        expect(bird.attributes.keys).to include("incorrect_answers")
      end

      it "is a string" do
        expect(bird.incorrect_answers.class).to eq Fixnum
      end
    end
  end
end