
var request = require("request");

require("dotenv").config();

request("https://www.npmjs.com/package/node-spotify-api", function (err, response, body) {

    if (!err && response.statusCode === 200) {
        console.log("Spotify is working");
    }

}); //spotify request

request(`"https://rest.bandsintown.com/artists/"` + artist + `"/events?app_id=codingbootcamp"`, function (err, response, body){
    if (!err && response.statusCode === 200) {
        console.log("Bands is working");
    }
});//bands in town request

request()

var spotify = new Spotify(keys.spotify);
console.log(spotify);

var search = process.argv[2];
var term = process.argv.slice(3).join(" ");

//search for the name of venue
if (search === "concert-this") {
    console.log("Searching for concert")
    findVenueLocationDate(term)
    
}

function findVenueLocationDate() {
    console.log("Finding this information");
    //term will eqaul artist/band name
    //name of venue
    //venue location
    //date of event in "mm/dd/yyyy"

}


if (search === "spotify-this-song"){
    console.log("Searching for Spotify Song");
    findSpotify(term);
    //Artists
    //Songs name
    // link of song from spotify
    //album of song
    //default = "The Sign" by Ace of Base

}

function findSpotify() {
    console.log("Finding spotify information");

   //Artists
    //Songs name
    // link of song from spotify
    //album of song
    //default = "The Sign" by Ace of Base

}

if (search === "movie-this") {
    console.log("Searching for a movie");
    findMovie(term);
}


function findMovie() {
    console.log("Finding Movie")
    // Title of the movie.
    // Year the movie came out.
    // IMDB Rating of the movie.
    // Rotten Tomatoes Rating of the movie.
    // Country where the movie was produced.
    // Language of the movie.
    // Plot of the movie.
    // Actors in the movie.


}

// // commands
// // concert-this
// // spotify-this-song
// // movie-this
// // do-what-it-says

