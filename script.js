//global variables
let city = []

//Don't move this, needs to run on page load so that it will have the user's location data by the time they want to start. 
getLocation();

// // the following is just a test fire of js link
// $("body").prepend($("<p>").text("HOWDY"));

var happy = [{
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
},
{
    "name": "happyRock",
    "uri": "37i9dQZF1DWXRqgorJj26U"
},
{
    "name": "happyLah",
    "uri": "37i9dQZF1DWZdLqpoFOt65"
},
{
}]

var sad = [{
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
},
{
    "name": "sadSongs",
    "uri": "37i9dQZF1DX7qK8ma5wgG1"
},
{
    "name": "sadCovers",
    "uri": "37i9dQZF1DX64Y3du11rR1"
}]

var angry = [{
    "name": "angryRap",
    "uri": "6oxSqwtAseyUm65MWl8JEM"
},
{
    "name": "angryFeminist",
    "uri": "0jFTAWnKeif1jeycmfzntA"
},
{
    "name": "angryBreakup",
    "uri": "4LkEuyJjv4MVIDWh9QExsp"
},
{
    "name": "angryMetal",
    "uri": "0iCttsHgYOghFz6QtsB1CH"
},
{
    "name": "angryWorkout",
    "uri": "4QUNlh17SkjMlcZ9Z9Z9IK"
}]

var sleepy = [{
    "name": "sleepPiano",
    "uri": "37i9dQZF1DX4sWSpwq3LiO"
},
{
    "name": "sleepMeditation",
    "uri": "0I8mg2ngPlMpDMvNuYcpJx"
},
{
    "name": "sleepJazz",
    "uri": "37i9dQZF1DXa1rZf8gLhyz"
},
{
    "name": "sleepRain",
    "uri": "37i9dQZF1DXbcPC6Vvqudd"
},
{
    "name": "sleepSpace",
    "uri": "37i9dQZF1DX1n9whBbBKoL"
}]

var love = [{
    "name": "loveChill",
    "uri": "4QuJ2DbcTe7R8lzqfNXz7v"
},
{
    "name": "loveCountry",
    "uri": "37i9dQZF1DX8WMG8VPSOJC"
},
{
    "name": "loveBedroom",
    "uri": "37i9dQZF1DX0QKpU3cGsyb"
},
{
    "name": "loveAmor",
    "uri": "37i9dQZF1DWUoGbRYcteyC"
}, 
{   
    "name": "loveBeats",
    "uri": "7i9dQZF1DWSRc3WJklgBs"
}]

var focused = [{
    "name": "focusBeats",
    "uri": "37i9dQZF1DWWQRwui0ExPn"
},
{
    "name": "focusDeep",
    "uri": "37i9dQZF1DWZeKCadgRdKQ"
},
{
    "name": "focusClassical",
    "uri": "37i9dQZF1DXd5zUwdn6lPb"
},
{
    "name": "focusStudy",
    "uri": "37i9dQZF1DX8NTLI2TtZa6"
},
{
    "name": "focusGuitar",
    "uri": "37i9dQZF1DX0jgyAiPl8Af"
}]

let emotion = happy;

// need 3 more arrays for emotions
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


<<<<<<< HEAD
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
=======
playlistRandomizer(emotion);


>>>>>>> dev
