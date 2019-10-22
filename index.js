let express = require('express')
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let artistRoutes = require('./routes/artistRoutes');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) // middleware
// parse application/json
app.use(bodyParser.json()) // middleware

//make heroku not sleep
setInterval(function() {
  http.get("https://web-lab5.herokuapp.com/");
}, 300000); 

//handlebars
const expressHbs = require('express-handlebars');
app.engine(
  'hbs',
  expressHbs({
    layoutsDir: 'views/',
    defaultLayout: 'main-layout',
    extname: 'hbs'
  })
);

app.set('view engine', 'hbs');
app.set('views', 'views');

//tell express to see these directories
app.use('/public', express.static(path.join(__dirname,'/public')));
app.use('/views', express.static(path.join(__dirname,'/views')));
app.use(artistRoutes);

//tells the node app what to do when you send a set request of '/' (home page)
app.get('/', (req,res) => {
  res.render('allArtists');
});

const port = process.env.PORT || 3000
var server = app.listen(port,() => {
  console.log("Server started at http://localhost:%s", port);
});