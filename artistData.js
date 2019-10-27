//makes it so that node will not use uninitialized variables
//quickly solves the async problem
'use strict';

let artists = [];

//request to read from json object
//artist.json is in the root directory
const fs = require('fs');
fs.readFile('artists.json', (err, data) => {
    if (err) throw err; 
    artists = JSON.parse(data);
    console.log("readfile", artists);
});

//request to write json to file
function writeToFile() {
    fs.writeFile('artists.json', JSON.stringify(artists), (err) => {
        if (err) throw err;
        console.log('artists written to json');
    });
}

//artist array getters and setters 
function addArtist(a) {
    artists.push(a);
    writeToFile();
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
    writeToFile();
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
    getArtist : getArtist,
    deleteArtist : deleteArtist,
    writeToFile : writeToFile
}