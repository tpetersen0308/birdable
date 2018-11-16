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
- Refactor NavBar with react bootstrap components.
- Add user profile section with stats and profile picture.
  - Users can favorite birds.
    - Favorites can be a filter option when user is logged in.
  - Users can add friends to compare performance, etc.
  - Add top families.
  - Add top regions.
- Add footer with media attributions
- Make browse searchable?
- Refactor so birds are loaded from backend API when user sets up exercise, not when app loads.
- Refactor Problem, Solution, etc. to render birds through BirdsList component
- Refactor exercise to call resetExercise() in component lifecycle hook.
- Get permission to use media before deploying to Heroku
- Add user authentication
  - Look into using oAuth on heroku apps
- Add more song samples to each bird


** Birds #168, #186, #219, #406, #424, #430, #571 have no regions assigned
** All birds have all other attributes assigned
** There are no duplicate bird records
** Bird common names contain only lower-case characters, hyphens, and whitespace



