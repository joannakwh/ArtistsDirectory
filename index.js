let express = require('express')
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
//import module from artistRoutes.js
let artistRoutes = require('./routes/artistRoutes');


//this lets you use req.body.____ to grab stuff from the entire body portion of an incoming request stream 
// express.js middleware 
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())

//make heroku not sleep (it kind of works sometimes?)
setInterval(function() {
  http.get("https://web-lab5.herokuapp.com/");
}, 300000); 

//handlebars
const expressHbs = require('express-handlebars');
app.engine(
  'hbs',
  expressHbs({
    layoutsDir: 'views/', //folder where your hbs files are
    defaultLayout: 'main-layout', //the main hbs file that will load first in every page
    extname: 'hbs' 
  })
);

app.set('view engine', 'hbs');
app.set('views', 'views');

//tell express to see these directories
//need to join paths with __dirname, which is the local root directory
app.use('/public', express.static(path.join(__dirname,'/public')));
app.use('/views', express.static(path.join(__dirname,'/views')));
app.use(artistRoutes);

//tells the node app what to do when you send a set request of '/' (home page)
app.get('/', (req,res) => {
  res.redirect(301, '/all');
});

const port = process.env.PORT || 3000
var server = app.listen(port,() => {
  console.log("Server started at http://localhost:%s", port);
});