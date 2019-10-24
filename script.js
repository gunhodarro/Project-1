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
// document.getElementById("resetBtn").addEventListener("click");


// Padding Function
function pad(number, length) {
  var str = 'tt' + number;
  while(str.length < length) {
    str = '0' + str;
  }
  return str;
}

// Refresh Movie
$("#refresh").click(function() {
  var movie = pad(Math.floor((Math.random() * 2155529) + 1), 7);
  $("#refresh").text("loading...").prop("disabled", true);
  console.log(refresh);
  console.log(movie);
  $.getJSON("http://www.omdbapi.com/?i=" + movie + "&y=&plot=short&apikey=trilogy", function(data) {
    // if(data) {
    //   type === "episode" ||
    // }
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
  var movie = pad(Math.floor((Math.random() * 2155529) + 1), 7);
  $("#refresh2").text("loading...").prop("disabled", true);
  console.log(refresh);
  console.log(movie);
  $.getJSON("http://www.omdbapi.com/?i=" + movie + "&y=&plot=short&apikey=trilogy", function(data) {
    // if(data) {
    //   type === "episode" ||
    // }
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