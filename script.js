//global variables
let city = [];

//Don't move this, needs to run on page load so that it will have the user's location data by the time they want to start.
getLocation();

//hides user input prompts until the user clicks a button to start, we still need to add a different button other than reccomend playlists to start the user experience.
$(".moodButton").hide();
$("#localCallout").hide();
$("#feelsLabel").hide();

// TODO:will need to hide div responsible for callout as well as show it  
// TODO:will need to hide div responsible for callout as well as show it  
// TODO:will need to hide div responsible for callout as well as show it  
// TODO:will need to hide div responsible for callout as well as show it  
// TODO:will need to hide div responsible for callout as well as show it  




// deals with opening animation (inserted by etp 6/27)
setTimeout(function () {
  // making the splash banner disappear on timer
  $("#splash").removeClass(
    "animate__animated animate__slideInDown animate_slow"
  );
  $("#splash").addClass("animate__animated animate__fadeOut animate_slower");
  // making the start button animate in on timer
  $("#startDiv").addClass("animate__animated animate__zoomIn");
  $("#startDiv").removeClass("none");
}, 1111);

// ...........................................................
function welcome() {
  $("#startDiv").hide();
  $("main").removeClass(
    "grid-x grid-padding-x align-center-middle text-center"
  );
  $("#weatherTop").show();
}

function music() {
  $("#resultscallouts").show();
}

// .............................................................
let currentWeather = [];
let playlistsPicked =[];


let happy = [{
  "name": "happyBeats",
  "uri": "37i9dQZF1DWSf2RDTDayIx"
},
{
  "name": "happyFolk",
  "uri": "37i9dQZF1DWSkMjlBZAZ07"
},
{
  "name": "happyHits",
  "uri": "37i9dQZF1DXdPec7aLTmlC"
},
{
  "name": "happyBirthday",
  "uri": "37i9dQZF1DWYtQSOiZF6hj"
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
  "name": "happySmile",
  "uri": "4AnAUkQNrLKlJCInZGSXRO"
},
{
  "name": "happyWake",
  "uri": "37i9dQZF1DX0UrRvztWcAU"
},
{
  "name": "happyJazz",
  "uri": "37i9dQZF1DX5YTAi6JhwZm"
},
{
  "name": "happyLah",
  "uri": "37i9dQZF1DWZdLqpoFOt65"
},
{
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
},
{
  "name": "sadSongs",
  "uri": "37i9dQZF1DX7qK8ma5wgG1"
},
{
  "name": "sadBops",
  "uri": "37i9dQZF1DWZUAeYvs88zc"
},
{
  "name": "sadCountry",
  "uri": "3NLqOxkfkRNQ0oXNqhGdg7"
},
{
  "name": "sadNight",
  "uri": "6EWG7FojALznoSIV67HEg1"
},
{
  "name": "sadEspanol",
  "uri": "6tT5gZzLIQmyHd5UotkAmF"
},
{
  "name": "sadBeats",
  "uri": "37i9dQZF1DWVrtsSlLKzro"
},
{
  "name": "sadCovers",
  "uri": "37i9dQZF1DX64Y3du11rR1"
}]
let angry = [{
  "name": "angryRap",
  "uri": "6oxSqwtAseyUm65MWl8JEM"
},
{
  "name": "angryFeminist",
  "uri": "0jFTAWnKeif1jeycmfzntA"
},
{
  "name": "angryWorkout",
  "uri": "37i9dQZF1DX76Wlfdnj7AP"
},
{
  "name": "angryMusic",
  "uri": "0kbIVraS3Xa7FhvAb9KSGe"
},
{
  "name": "angryRunning",
  "uri": "7tZ0OrvbHPmCQU4AyUbzkh"
},
{
  "name": "angryCheating",
  "uri": "4fmCWkcMBZ4yFzCo3C5KTi"
},
{
  "name": "angryHipHop",
  "uri": "7J9BcmPs2pCbAMfa1IdjZR"
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
  "name": "angryMotivated",
  "uri": "3YGO0SanbQ63cRMjZ0PSxw"
}]
let sleepy = [{
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
  "name": "sleepBaby",
  "uri": "37i9dQZF1DX0DxcHtn4Hwo"
},
{
  "name": "sleepWhiteNoise",
  "uri": "37i9dQZF1DWUZ5bk6qqDSy"
},
{
  "name": "sleepDream",
  "uri": "37i9dQZF1DWSiZVO2J6WeI"
},
{
  "name": "sleepHawaii",
  "uri": "37i9dQZF1DX5FuBDzVtEFX"
},
{
  "name": "sleepStrings",
  "uri": "37i9dQZF1DWXIrropGBmnR"
},
{
  "name": "sleepRain",
  "uri": "37i9dQZF1DXbcPC6Vvqudd"
},
{
  "name": "sleepSpace",
  "uri": "37i9dQZF1DX1n9whBbBKoL"
}]
let love = [{
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
  "name": "loveBallads",
  "uri": "37i9dQZF1DWYMvTygsLWlG"
},
{
  "name": "love70s",
  "uri": "37i9dQZF1DWY373eEGlSj4"
},
{
  "name": "love80s",
  "uri": "37i9dQZF1DXc3KygMa1OE7"
},
{
  "name": "love90s",
  "uri": "37i9dQZF1DWXqpDKK4ed9O"
},
{
  "name": "love00sRnB",
  "uri": "37i9dQZF1DWYmmr74INQlb"
},
{
  "name": "loveAmor",
  "uri": "37i9dQZF1DWUoGbRYcteyC"
}, 
{   
  "name": "loveBeats",
  "uri": "7i9dQZF1DWSRc3WJklgBs"
}]
let focused = [{
  "name": "focusBeats",
  "uri": "37i9dQZF1DWWQRwui0ExPn"
},
{
  "name": "focusDeep",
  "uri": "37i9dQZF1DWZeKCadgRdKQ"
},
{
  "name": "focusBrain",
  "uri": "37i9dQZF1DWXLeA8Omikj7"
},
{
  "name": "focusAcoustic",
  "uri": "37i9dQZF1DXaImRpG7HXqp"
},
{
  "name": "focusAllNighter",
  "uri": "37i9dQZF1DX692WcMwL2yW"
},
{
  "name": "focusMorning",
  "uri": "37i9dQZF1DX6T5dWVv97mp"
},
{
  "name": "focusJazz",
  "uri": "37i9dQZF1DWSBRKlyNxSuy"
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


// let userPreferences = {
//     "Rain": [],
//     "Clouds":["candy"],
//     "Clear":[],
// }

// will need to take an emotion

// function buildUserProfile(){
  //     //Will replace empty jQuery with values once design has them implemented
  //     rainEmotion = $("").val().trim();
  //     clearSunnyEmotion = $("").val().trim();
  //     cloudyEmotion = $("").val().trim();
  
  //     (userPreferences.rain).push(rainEmotion);
  //     userPreferences.clear = clearSunnyEmotion;
  //     userPreferences.clouds = cloudyEmotion;
  // }
  
  
  
  
  
  
  
  
  /**
   * this function grabs user's 
   */
  function getLocation() {
    //Grabs users general location based on IP address
    $.ajax({
      url: "https://ipapi.co/json/",
      method: "GET",
    }).then(function (response) {
      cityName = response.city;
      city.push(cityName);
      console.log(cityName);
    });
  }
  
  function playlistRandomizer(mood) {
    //randomly selects a name/url pair by generating a random number and using it as the index number to access a name and uri pair from whichever emotion object is passed into it.
    
    let listSelector = Math.floor(Math.random() * Math.floor(mood.length - 1));
    let nameSelected = mood[listSelector].name;
    let uriSelected = mood[listSelector].uri;
    

    // WORKSPACE$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    
    playlistsPicked.push(nameSelected);
    localStorage.setItem(currentWeather, JSON.stringify(playlistsPicked));
    // WORKSPACE$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$



// HERE IS WHERE WE PUT THE ARRAY SAVE!!!!!!
    console.log(listSelector, nameSelected, uriSelected);




    //Appends a random playlist to the page from whatever emotion is passsed in/
    let songSpace = $("#resultscallouts");
    let spotifyfirst = '<iframe src="https://open.spotify.com/embed/playlist/';
    let uriInsert = uriSelected + '" ';
    let spotifyLast =
    ' width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
    let finalLink = spotifyfirst + uriInsert + spotifyLast;
    
    // console.log(finalLink);
    songSpace.prepend(finalLink);
  }
  
  //function will fetch the weather conditions in a given city and the icon associated with that weather condition Weather.main returns are :Clouds, Clear, Rain, Snow, Mist, Fog, Thunderstorm
  function weatherSearch() {
    let apiKey = "&appid=fb96e9e4a08a704e7e522a72ff158382&units=imperial";
    let queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" + city[0] + apiKey;
    let iconURL = "https://openweathermap.org/img/wn/";
    
    // console.log(queryURL);
    
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      //Returns weather conditions in a string ex: sunny, cloudy, raining etc.
      
      let weatherType = response.weather[0].main;
      currentWeather.push(weatherType);
      
      //Grabs the id of the icon associated with the current weather conditions
    let iconLoc = response.weather[0].icon;
    
    //concatenates the standard url for the icons with the id of the icon associated with the current weather and puts it into a usable image source link
    let fullIconUrl = iconURL + iconLoc + "@2x.png";
    
    //Appends text prompting for user input to the page based on current weather.
    weatherWelcome = $(".weatherType");

    // handling localstorage - doing this within the weather ajax makes it easier to focus on the weather in question.
    let retrievedPlaylists = localStorage.getItem(currentWeather[0]);
    if (retrievedPlaylists) {
    playlistsPicked.push(JSON.parse(retrievedPlaylists));
    console.log(playlistsPicked);
    
    let pListString = "";
  
    playlistsPicked.forEach(item => {
      pListString = pListString + item + ",  ";
    });

    $(".returnString").append(pListString);
    };
    

    //This needs to be fixed is not currently working but is not a top tier priority
    // console.log(fullIconUrl);
    weatherIcon = $('<img style="display: inline-block;">', { id: "weatherIcon", src: fullIconUrl });
    $("#weatherIconHost").append(weatherIcon);


    //will make this text more intuitive later this is just temporary for testing 
    if (weatherType == "Clouds"){
          weatherWelcome.text('Looks partly cloudy in your neighborhood');
    }
    else if (weatherType == "Rain"){
        weatherWelcome.text('Looks like it might be raining a bit where you are right now');
    }
    else if (weatherType == "Clear"){ 
        weatherWelcome.text('Seems like there are mostly clear skies in your neighborhood');
    } else {
      weatherWelcome.text('Hmm, not sure about your weather, but..');
    }
      // handling show/hides within weather function 
    $(".moodButton").show();
    $("#feelsLabel").show();
    $("#localCallout").show();
    $(".moodButton").addClass(
      "animate__animated animate__jello animate__delay-1s"
    );

    // etp put this part in 6/25, handles conditional weather upon search function.
    if (weatherType === "Clear") {
      $(".wrapper").removeClass("parallax");
      $(".wrapper").addClass("parallaxClear");
      $(".top-bar").addClass("clear1");
      $("footer").addClass("clear1");
      $("button").addClass("clear1");
      $(".moodButton").addClass("clear1");
      $("#localCallout").addClass("clear1");
    } else if (weatherType === "Clouds") {
      $(".wrapper").removeClass("parallax");
      $(".wrapper").addClass("parallaxClouds");
      $(".top-bar").addClass("clouds");
      $("footer").addClass("clouds");
      $("button").addClass("clouds");
      $(".moodButton").addClass("clouds");
      $("#localCallout").addClass("Clouds");
    } else if (weatherType === "Rain") {
      $(".wrapper").removeClass("parallax");
      $(".wrapper").addClass("parallaxRain");
      $(".top-bar").addClass("rain");
      $("footer").addClass("rain");
      $("button").addClass("rain");
      $(".moodButton").addClass("rain");
      $("#localCallout").addClass("Rain");
    } else {$("#localCallout").addClass("none");}
  });
}

//Temporary to test the weathersearch and getlocation functions
$("#startBtn").on("click", weatherSearch);
$("#startBtn").on("click", welcome);
// the next line adds animation to the reset button added etp 6/27
$("#startBtn").on("click", function () {
  $("#reset").addClass("animate_animated animate__flipInX animate__delay-2s");
  setTimeout(function(){
    $("#reset").removeClass("none");
     }, 1000);

});

$(".moodButton").click(function () {
  //Hide the mood buttons after user input has been taken in
  $("#resultscallouts").show();

    
  // TODO:
  // this brings a return string of "Clouds"
  // console.log(currentWeather);  
  // // TODO:
  // TODO:
      
      
      
      //Capture current mood data from the clicked mood button and scope it globally for later use.
      mood = $(this).attr("mood-data");
      // (userPreferences.currentWeather[0]).push(mood);
      console.log();



  //Pass
  playlistRandomizer(eval(mood));
});

// event handler for reset button (etp 6.27)
$("#reset").click(function () {
  $("#resultscallouts").empty();
  localStorage.clear();
  //   TODO: put on this line a clearance of saved user preferences.
});



// thing we want to bring back is :
// ("weather", "strung list of playlists picked")


// NEED: playlistsPicked [];
//  on randomizer playlistsPicked.push(nameSelected);
  // localStorage.setItem(currentWeather, JSON.stringify(playlistsPicked)  )
// 
// 
// 