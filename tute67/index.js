//creating the custom backend using node.js

const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

// the pages in the websites
// resding the pages

const home=fs.readFileSync('home.html')   //use ./ if the files are in same direcatory
const contact=fs.readFileSync('./contact.html')
const about=fs.readFileSync('./about.html')
const services=fs.readFileSync('./services.html')


const server = http.createServer((req, res) => {

    console.log(req.url)         //this will print the reqested url
    url=req.url                  //define the url

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');    //make this as text/html

  //severing the pages 
  if(url=='/'){
    res.end(home);
  }
  else if(url=='/contact'){
    res.end(contact);
  }
  else if(url=='/services'){
    res.end(services);
  }
  else if(url=='/about'){
    res.end(about);
  }
  else{
    res.statusCode = 404;          //here we preffer to change the port
    res.end('404 not found')
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

