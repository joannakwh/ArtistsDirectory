let artists = [];

function addArtist(a) {
    artists.push(a);
}

function getAllArtists() {
    return artists;
}

function getArtist(id) {
    return artists[id];
}

function deleteArtist(id) {
    //delete if found
    for(var i = 0; i < artists.length; i++)
    {
        if(artists[i].name == id)
        {
            artists.splice(i, 1);
        }
    }
}

//module.exports is a feature in node that lets you export a 'module' object to be imported and used somewhere else (i.e. in another js file)
//inside this object you can put vars and functions, etc

//How to use the module somewhere else:
// (in another js file) 
//      var something = require('./artistData'); <-- relative path to artistData.js
//      something.addArtist(paramObject1); //calls addArtist function in artistData.js

module.exports = {
    //function name in artistData.js : how you want to call the function externally (I made them the same)
    addArtist : addArtist, 
    getAllArtists : getAllArtists,
    getArtist: getArtist,
    deleteArtist: deleteArtist 
}