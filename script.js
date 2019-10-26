document.getElementById("flipping").addEventListener("click", flip);
function flip() {
  console.log("flipping");
  x = Math.floor(Math.random() * 2);
  console.log(x);
  if (x === 0) {
    document.getElementById("result").innerHTML = "Genre 1";
    console.log("heads");
  } else {
    document.getElementById("result").innerHTML = "Genre 2";
    console.log("tails");
  }
}



var randomMovies = [
    "Titanic",
    "Brokeback Mountain",
    "The Fighter",
    "Harry Potter",
    "The Prestige",
    "The Notebook",
    "The Goonies",
    "Garden State",
    "Mean Girls",
    "The Sandlot",
    "Ferris Bueller's Day Off",
    "Little Miss Sunshine",
    "The Grand Budapest Hotel",
    "Pretty Woman",
    "Wedding Crashers",
    "Step Brothers",
    "American Beauty",
    "Gladiator",
    "A Beautiful Mind",
    "Chicago",
    "The King's Speech",
    "127 Hours",
    "Black Swan",
    "The Social Network",
    "Edward Scissorhands",
    "The Conjuring",
    "Mother!",
    "Get Out",
    "Insidious",
    'The Babadook',
    "Saw",
    "A Quiet Place",
    "Synecdoche",
    "Almost Famous",	
    "Stardust",	
    "28 Days Later",	
    "Changeling",	
    "Nine Queens",	
    "Pleasantville",	
    "Stranger Than Fiction",	
    "Atonement",	
    "Blue Velvet",	
    "The Name of the Rose",	
    "Frenzy",	
    "Spellbound",	
    "Sleuth",	
    "Sleepers",	
    "Dances with Wolves",	
    "Willy Wonka & the Chocolate Factory",	
    "The Thief of Bagdad",	
    "Noises Off",	
    "Malcolm X",	
    "Blow",	
    "A Simple Plan",	
    "Dead Man",	
    "Children of Men",	
    "Mr. Nobody",	
    "TT3D: Closer to the Edge",	
    "Bonnie and Clyde",	
    "Biutiful",	
    "Cinderella Man",	
    "21 Grams",	
    "Blazing Saddles",	
    "The Thin Red Line",	
    "Black Hawk Down",	
    "Remember the Titans",	
    "Sling Blade",	
    "Marathon Man",	
    "Seconds",	
    "The Assassination of Jesse James by the Coward Robert Ford",	
    "The Mirror",	
    "Open Your Eyes",	
    "Harold and Maude",	
    "Rudy",	
    "The Last Emperor",	
    "The Holy Mountain",	
    "Carlito's Way",	
    "The Enigma of Kaspar Hauser",	
    "Letters from Iwo Jima",	
    "Disconnect",	
    "Underground",	
    "The Hours",	
    "Mississippi Burning",	
    "Magnolia",	
    "The Untouchables",	
    "The Manchurian Candidate",	
    "The Conversation",	
    "All the President's Men",	
    "Miller's Crossing",	
    "The Caine Mutiny",	
    "In the Heat of the Night",	
    "The Sound of Music",	
    "Dead Poets Society",	
    "Crash",	
    "Cabaret",	
    "How Green Was My Valley",	
    "The Piano",	
    "In the Mood for Love",	
    "Anatomy of a Murder",	
    "The Graduate",	
    "Fruitvale Station",	
    "Glory",	
    "The Raid 2",	
    "Moulin Rouge",	
    "The Man Who Wasn't There",	
    "The Killing",	
    "Barry Lyndon",	
    "Mildred Pierce",	
    "Apollo 13",	
    "Come and See",	
    "Straight Outta Compton	",
    "Dancer in the Dark",	
    "The Count of Monte Cristo",	
    "Office Space",	
    "Glengarry Glen Ross",	
    "Pride & Prejudice",	
    "Indiana Jones and the Temple of Doom",	
    "Jane Eyre",
    "Forrest Gump",
    "Dazed and Confused",	
]

// Refresh Movie
$("#refresh").click(function() {
  var movie = randomMovies[index];
  index = Math.floor(Math.random() * 120);
  
  $("#refresh").text("loading...").prop("disabled", true);
  console.log(refresh);
  console.log(movie);
  $.getJSON("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy", function(data) {
  
    var type = data.type;
    var title = data.Title;
    var year = data.Year;
    var rating = data.imdbRating;
    var actors = data.Actors;
    var plot = data.Plot;
    var poster = data.Poster;
    var image = $("<img>").attr("src", poster);
    $("#title").text(title);
    $("#year").text(year);
    $("#rating").text(rating);
    $("#actors").text(actors);
    $("#plot").text(plot);
    $("#poster1").html(image);
    console.log(data);
  }
  )
  
  
  .done(function() {
    $("#refresh").text("Next").prop("disabled", false);
  });
});

// Refresh Movie
$("#refresh2").click(function() {
  var movie = randomMovies[index];
  index = Math.floor(Math.random() * 120);
  $("#refresh2").text("loading...").prop("disabled", true);
  console.log(refresh);
  console.log(movie);
  $.getJSON("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy", function(data) {

    var type = data.type;
    var title = data.Title;
    var year = data.Year;
    var rating = data.imdbRating;
    var actors = data.Actors;
    var plot = data.Plot;
    var poster = data.Poster;
    var image = $("<img>").attr("src", poster);
    $("#title2").text(title);
    $("#year2").text(year);
    $("#rating2").text(rating);
    $("#actors2").text(actors);
    $("#plot2").text(plot);
    $("#poster2").html(image);
    console.log(data);

  }
  )
  
  
  .done(function() {
    $("#refresh2").text("Next").prop("disabled", false);
  });
});