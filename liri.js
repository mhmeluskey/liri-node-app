
var request = require("request");
require("dotenv").config();

var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var search = process.argv[2];
console.log(search);
var term = process.argv.slice(3).join(" ");

/////////////////////////////////////////////////////  
if (search === "concert-this") {

  request("https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp", function (err, response, body) {


    if (!err && response.statusCode === 200) {

      // console.log(term);
      var info = JSON.parse(body);
      
      //console.log(array);
      console.log(info);


      //store all info[0].venue.name in array
      //run through for loop
      for (var i = 0; i < info.length; i++) {
        console.log("Concert" + i);


        //console.log(info);
        //name of venue
        console.log("Venue: " + info[i].venue.name);
        //venue location
        console.log("Location: " + info[i].venue.city);
        console.log(info[i].venue.region);
        //date of the event
        console.log("Date: " + info[i].datetime);
      }

    }//response

  });//bands in town request 
}

// ////////////////////////////////////////////////
if (search === "spotify-this-song") {
  
 
  spotify.search({ type: 'track', query: term }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    console.log(data.tracks.items);
//link of song from spotify
    console.log("Link to song: " + data.tracks.items[0].external_urls.spotify);
//Artists
    console.log("artists: " + data.tracks.items[0].artists[0].name);
//Songs name
    console.log("song name: " + data.tracks.items[0].name)
//album of song
    console.log("album name: " + data.tracks.items[11].name)
    //default = "The Sign" by Ace of Base
    //find function
    
  });
}


// // /////////////////////////////////////////////////////// 


if (search === "movie-this") {
  request("http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy", function (err, response, body) {
    if (!err && response.statusCode === 200) {
     
      console.log("term" + term);

      var information = JSON.parse(body);


      console.log(information);
      // Title of the movie.
      console.log("title" + information.Title);
     

    }


    
    
    // Year the movie came out.
    console.log("released year: " + information.Year);
    // IMDB Rating of the movie.
    console.log("IMDB rating: " + information.imdbRating);
    // Rotten Tomatoes Rating of the movie.
    console.log("Rotten Tomatoes: " + information.Ratings[1].value);
    // Country where the movie was produced.
    console.log("Produced in: " + information.Country);
    // Language of the movie.
    console.log("Language: " + information.Language);
    // Plot of the movie.   
    console.log("Plot: " + information.Plot);                 
  });
}