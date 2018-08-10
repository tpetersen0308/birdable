BACKEND
* Scraping
  - Built bird and scraper classes
    - To associate birds with a family, I had to first scrape the list of taxonomies to create
      a hash of the family_tid url query parameters pointing at the associated region.
    - Then, by iterating through that hash and scraping each individual taxonomy page for birds,
      I was able to start collecting the bird data to build my API with in a hash organized by
      taxonomies.
    - Because these pages didn't have regional information, I also had to scrape the list of
      regions similarly to taxonomies, created a hash with the regional tids pointing to the
      region names.
      - The main difficulty here is that the Audubon Society website displays birds in an infinite
        scroll, and my scraper only would get the results that were initially loaded. Thus, I 
        had to figure out how to scrape all results from an infinitely scrolling page.
        - By inspecting the requests that were fired when scroll hit the bottom of the page, I
          found that it was making a request to a regular html page with an additional query 
          parameter of page number. Added this to the url that I was hitting with nokogiri in a 
          while loop that incremented the page number and scraped each page until it reached a 
          page without any birds on it.
    - I then iterated over the regions hash to collect arrays of bird names associated with each
      region in a hash of region names pointing a arrays of bird names. The idea being that I
      could iterate over this hash, adding the region information to each bird object in the DB.
* Seeding the Database
  - Made calls to BirdScraper methods in seed file to seed the database and properly associate
    birds with regions.
FRONTEND
* React
  - Set up fetchBirds action to load all of the birds from the API into the store when the 
    App component is mounted.
  - Combine reducers for birds and loading.



TODO:
- Refactor region and family filters to select multiple options
- Birds can be selected by generation 4 random numbers between 0 and birds.length 
- Add user class
- Add user authentication
- Add exercise class(es)
- Add correct_song_answers, incorrect_song_answers, correct_name_answers, and 
  incorrect_name_answers attributes to bird table in order to be able to implement
  difficulty setting in future.

** Birds #168, #186, #219, #406, #424, #430, #571 have no regions assigned
** All birds have all other attributes assigned
** There are no duplicate bird records
** Bird common names contain only lower-case characters, hyphens, and whitespace

REACT COMPONENTS:
- Bird
  - Receives props:
    - bird: a bird object from the store
    - exerciseType: "name" or "song" -- determines what information should be displayed
- SongExercise
  - Renders BirdOptions
  - Renders SongSample
- NameExercise
  - Renders NameOptions
  - Renders BirdClue
- ExercisePage
  - controls exercise logic
  - retrieves exercise resources from store and passes into exercise components as props
  - Flow:
    - On load, displays option to practice matching birds by song, or by name.
    - Links route to correct exercise type
    - When an answer is submitted, a solution page is loaded that displays results
      - all songs and names should become available
      - include 'next exercise' button



SAMPLE CODE FOR BIRD LIST

    let birds = this.props.birds.slice(0, 4).map(bird =>
      <Col xs={6} md={4}>
        <Thumbnail src={bird.image} alt={bird.common_name} width="30%" height="42">
          <h3>{bird.common_name}</h3>
          <p>{bird.scientific_name}</p>
          <p>
            <audio
              id={bird.id}
              controls
              src={bird.song}>
              Your browser does not support the <code>audio</code> element.
          </audio></p>
        </Thumbnail>
      </Col>
    )