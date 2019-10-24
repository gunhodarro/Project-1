




























































































var cloudArray = [
    "Titanic",
    "Brokeback Mountain",
    "The Fighter",
    "Harry Potter",
    "The Prestige",
    "The Notebook",
    "The Goonies",
    "Garden State",
]

var clearArray = [
    "Mean Girls",
    "The Sandlot",
    "Ferris Beuler's Day Off",
    "Little Miss Sunshine",
    "The Grand Budapest Hotel",
    "Pretty Woman",
    "Wedding Crashers",
    "Step Brothers",
]

var snowArray = [
    "American Beauty",
    "Gladiator",
    "A Beautiful Mind",
    "Chicago",
    "The King's Speech",
    "127 Hours",
    "Black Swan",
    "The Social Network",
]

var rainArray = [
    "Edward Scissorhands",
    "The Conjuring",
    "Mother!",
    "Get Out",
    "Insidious",
    'The Babadook',
    "Saw",
    "A Quiet Place",
]



var movieRecFunction = function (conditionsOutside) {
    index = Math.floor(Math.random() * 8)
    if (conditionsOutside == "cloudy") {
        var cloudMovie = cloudArray[index];
        return cloudMovie
    } else if (conditionsOutside == "clear") {
        var clearMovie = clearArray[index];
        return clearMovie;
    } else if (conditionsOutside == "snow") {
        var snowMovie = snowArray[index];
        return snowMovie;
    } else if (conditionsOutside == "rain") {
        var rainMovie = rainArray[index];
        return rainMovie
    }
}


// This is our API key
var APIKey = "166a433c57516f51dfab1f7edaed8413";

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=Denver,Colorado&units=imperial&appid=" + APIKey;

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function (response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        function success(pos) {
            var crd = pos.coords;

            console.log('Your current position is:');
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);
        }
        $(".currentLocation").text("Based on the current weather at your location which is: " + response.main.temp + "(F) " + "& " + response.weather['0'].main);

        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }

        navigator.geolocation.getCurrentPosition(success, error, options);

    //Generate movie based on weather
        var moodMovie = function () {
            if (response.weather['0'].main == "Clouds") {
                movie = movieRecFunction("cloudy");
                $(".currentWeather").text("You should watch a Drama. " + "Our recommendation is... " + movie)
            } else if (response.weather['0'].main == "Clear") {
                movie = movieRecFunction("clear")
                $(".currentWeather").text("You should watch a Comedy. " + "Our recommendation is... " + movie)
            } else if (response.weather['0'].main == "Snow") {
                movie = movieRecFunction("snow");
                $(".currentWeather").text("You should watch a Best Picture Film. " + "Our recommendation is... " + movie)
            } else if (response.weather['0'].main == "Rain") {
                movie = movieRecFunction("rain");
                $(".currentWeather").text("You should watch a Horror Film. " + "Our recommendation is... " + movie)
            }
        };
        moodMovie()

    });