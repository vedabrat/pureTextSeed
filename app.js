const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/javascript');
  res.end(

  	'At the moment all you get is simple text\nBut know, this text is rendering reactively and instantly!\nMore improvements next week on... NODEWARS.') 	  
  	

  });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const img = "<image>http://techit.herokuapp.com/img/profile.png"
