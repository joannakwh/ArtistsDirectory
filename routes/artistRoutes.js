const express = require('express');
const router = express.Router();
let artistDataModule = require('../artistData');

router.get('/all', (req,res) => {
    let allArtists = artistDataModule.getAllArtists();
    for(let i = 0; i < allArtists.length; i++)
    {
        allArtists[i]['id'] = 'artist/' + i;
    }
    res.render('allArtists', {artists: allArtists});
});
router.post('/add', (req,res) => {
    let obj_name = req.body.name;
    let obj_about = req.body.about; 
    let obj_url = req.body.url;

    let obj = {
        name: obj_name,
        about: obj_about,
        url: obj_url
    }

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
    res.render('allArtists', {artists: matchingArtists});
});

module.exports = router;