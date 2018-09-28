const http = require('http');

const hostname = 'localhost';
const port = 5000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/javascript');
  res.end(

  	'At the moment all you get is simple text\nBut know, this text is rendering reactively and instantly!\nMore improvements next week on... NODEWARS.') 	  
  	

  });
var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const img = "<image>http://techit.herokuapp.com/img/profile.png"
