let express = require('express')
let app = express();
let path = require('path');

//make heroku not sleep
setInterval(function() {
  http.get("https://web-lab5.herokuapp.com/");
}, 300000); 

//tell express to see these directories
  //you must join with dirname because it must find the relative path
  // to know where your files are
  //make sure your src reference has a '/' in front
app.use('/css', express.static(path.join(__dirname, '/css')));
app.use('/scripts', express.static(path.join(__dirname, '/scripts')));

//tells the node app what to do when you send a set request of '/' (home page)
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

const port = process.env.PORT || 3000
var server = app.listen(port,() => {
  console.log("Server started at http://localhost:%s", port);
});