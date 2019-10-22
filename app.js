const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

setInterval(function() {
  http.get("https://web-lab5.herokuapp.com/");
}, 300000); // every 5 minutes (300000)

server.listen(port,() => {
  console.log(`Server running at port `+port);
});