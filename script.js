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


playlistRandomizer(emotion);