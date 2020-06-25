//global variables
let city = []

//Don't move this, needs to run on page load so that it will have the users location data by the time they want to start. 
getLocation();

// // the following is just a test fire of js link
// $("body").prepend($("<p>").text("HOWDY"));

let happy = [{
    "name": "happyBeats",
    "uri": "37i9dQZF1DWSf2RDTDayIx"
},
{
    "name": "happyFolk",
    "uri": "37i9dQZF1DWSkMjlBZAZ07"
},
{
    "name": "happyThrowback",
    "uri": "37i9dQZF1DWVOMXLzSabIM"
}]

let sad = [{
    "name": "sadCry",
    "uri": "7ABD15iASBIpPP5uJ5awvq"
},
{
    "name": "sadClassical",
    "uri": "37i9dQZF1DXbm0dp7JzNeL"
},
{
    "name": "sadDepression",
    "uri": "37i2v94FtSr0YRmW9LetICu4q"
}]

let emotion = happy;

// need array for emotions
// need to make general function that acccepts happy array or sad array
// randomized the contents of that array
// pick the first one
// plugs in its uri to iframe URL
// generate iframe via uri plugged in in space selected

function getLocation(){
    //Grabs users general location based on IP address
    $.ajax({
        url:'http://ip-api.com/json',
        method: "GET"
    }).then(function(response){
        cityName = response.city
        city.push(cityName)
        console.log(cityName)
    })
}

function playlistRandomizer(emotion){
    //randomly selects a name/url pair by generating a random number and using it as the index number to access a name and uri pair from whichever emotion object is passed into it.
     let listSelector = Math.floor(Math.random() * Math.floor(emotion.length));
     let nameSelected = emotion[listSelector].name
     let uriSelected = emotion[listSelector].uri

    
    let songSpace = $("#resultscallouts")
    let spotifyfirst = '<iframe src="https://open.spotify.com/embed?uri=spotify%3Aplaylist%'
    let uriInsert = uriSelected + '" '
    spotifyLast = 'width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    let finalLink = spotifyfirst + uriInsert + spotifyLast
    
    console.log(finalLink)
    songSpace.append(finalLink)
}


//function will fetch the weather conditions in a given city and the icon associated with that weather condition
function weatherSearch(){
    let apiKey = "&appid=fb96e9e4a08a704e7e522a72ff158382&units=imperial"
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city[0] + apiKey;
    let iconURL = "http://openweathermap.org/img/wn/"
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)
        //Returns weather conditions in a string ex: sunny, cloudy, raining etc. 
        let weatherType = response.weather[0].main;
        //Grabs the id of the icon associated with the current weather conditions
        let iconLoc = response.weather[0].icon;
        //concatenates the standard url for the icons with the id of the icon associated with the current weather and puts it into a usable image source link
        let fullIconUrl= iconURL + iconLoc + "@2x.png";
        
        console.log(weatherType);

    })
}

//Temporary to test the weathersearch and getlocation functions
$("#startBtn").on("click", weatherSearch);