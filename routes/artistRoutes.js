// another module with an express app (like the one in index)
//I am exporting it to a const called router to be used in index.js

const express = require('express');
const router = express.Router();
//import module from artistData.js
let artistDataModule = require('../artistData');

router.get('/all', (req,res) => {
    let allArtists = artistDataModule.getAllArtists();
    for(let i = 0; i < allArtists.length; i++)
    {
        allArtists[i]['id'] = 'artist/' + i;
    }
    res.render('all-artists', {artists: allArtists});
});
router.post('/add', (req,res) => {
    //use body parser to read body contents and extract form fields
    //where body parser grabs the fields, corresponds to the name="" attribute
    let obj_name = req.body.name;
    let obj_about = req.body.about; 
    let obj_url = req.body.url;

    //make new json object with strings
    let obj = {
        name: obj_name,
        about: obj_about,
        url: obj_url
    }
    //add object to existing artist array with addArtist function in imported module
    artistDataModule.addArtist(obj);
    res.redirect(301, '/all');
});
router.post('/delete/:id', (req,res) => {
    let id = req.params.id;
    artistDataModule.deleteArtist(id);
    res.redirect(301, '/all');
});

router.post('/search', (req,res) => {
    let query = req.body.search;
    console.log('search query:', query);
    let allArtists = artistDataModule.getAllArtists();
    let matchingArtists = [];

    for(let i = 0; i < allArtists.length; i++)
    {
        if(query != null && allArtists[i]['name'].includes(query))
        {
            matchingArtists.push(allArtists[i]);
        }
    }
    //renders all-artists.hbs and passes matchingArtists array to artists parameter in all-artists
    res.render('all-artists', {artists: matchingArtists});
});

//export (save) router object to module.exports
module.exports = router;