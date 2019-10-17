const express = require('express');
let mod = require('../peopleData');

const router = express.Router();

router.get('/peoples', (req,res) => {
   let Peoples = mod.getall();
   res.render('peoples', { people: Peoples, peoplesCSS: true });
   for(let i=0; i < Peoples.length; i++) 
   {
      Peoples[i]['id'] = 'people/' + i;
   }
});

router.get('/people/add', (req,res) => {
   res.render('peopleadd' ,{formsCSS: true});
});

router.get('/people/:id', (req,res) => {
   let id = req.params.id;
   let People = mod.getpeople(id);
   res.render('people', {people: People, peopleCSS: true})
});

router.post('/peoples/add', (req, res) => {
   let p_name = req.body.name;
   let p_about = req.body.about;
   let p_imageURL = req.body.imageURL;

   let pOject = {
      name: p_name,
      about: p_about,
      url: p_imageURL
   }

   mod.add(pOject);
   res.redirect(301, '/peoples');
})

module.exports = router;
