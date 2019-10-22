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

module.exports = {
    addArtist : addArtist,
    getAllArtists : getAllArtists,
    getArtist: getArtist,
    deleteArtist: deleteArtist 
}