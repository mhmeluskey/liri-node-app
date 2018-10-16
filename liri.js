
var request = require("request");
require("dotenv").config();

var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var search = process.argv[2];
var term = process.argv.slice(3).join(" ");

/////////////////////////////////////////////////////  
if (search === "concert-this") {
   
    request("https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp", function (err, response, body) {
         
    
         if (!err && response.statusCode === 200) {
            console.log("somthing");
            console.log("Bands is working");  
            console.log(term);
            console.log(response);
            //name of venue
            // console.log(JSON.parse(venue.name.response));
        }//response

       
        
        //venue location
        //date of event in "mm/dd/yyyy"

    });//bands in town request 
}

// ////////////////////////////////////////////////
if (search === "spotify-this-song") {
        spotify.search({ type: 'track', query: term }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            } 
          console.log(data); 
          console.log(JSON.parse(response));
            //Artists
            //Songs name
            //link of song from spotify
            //album of song
            //default = "The Sign" by Ace of Base
            //find function
          });
        }


// // /////////////////////////////////////////////////////// 


if (search === "movie-this") {
    request("http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy", function (err, response, body) {
      if (!err && response.statusCode === 200) {
      console.log("Movie information");
      console.log(term);
      console.log(JSON.parse(response));
      
    
    }
      

                  // Title of the movie.

                  // Year the movie came out.
                  // IMDB Rating of the movie.
                  // Rotten Tomatoes Rating of the movie.
                  // Country where the movie was produced.
                  // Language of the movie.
                  // Plot of the movie.                    
          });
        }