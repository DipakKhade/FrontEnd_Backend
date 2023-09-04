// node js introduction and installation

// console.log('Hey this is a node');


// the following code is copied from node.org/About page


const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');        //here  /html is used when we render the html o.w it is plan when there is a text
  res.end(`<!DOCTYPE html>                            <!-- this is under backtiks -->
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  
      <style>
  
          .main_heading{
              color: orange;
          }
  
          #navcontainer{
              border: 2px solid black;
              display: flex;
              height: 56px;
              
  
          }
          .navitems{
              margin: 19px 143px ;
          }
          #mid_container{
              display: flex;
              height: 80%;
              border: 2px solid black;
  
          }
          .miditem1{
              border: 2px solid black;
              padding: 23px;
              margin: 150px;
              width: 1000px;
  
          }
          .miditem2{
              border: 2px solid black;
              padding: 23px;
              margin: 150px;
  
          }
          .blu{
              color: blueviolet;
          }
  
  
  
  
  
      </style>
  </head>
  <body>
      <div class="main_heading"><h2>Dipak Rmaesh Khade - Portfolio</h2></div>
      <div id="navcontainer">
          <div class="navitems">Home</div>
          <div class="navitems">Services</div>
          <div class="navitems">Projects</div>
          <div class="navitems">Conatct</div>
          </div>
      </div>
  
      <!-- Middle part -->
      <div id="mid_container">
          <div class="miditem1">Hey My Name is Dipak Khade
              <div class="blu">And i am a Developer</div>
          </div>
          <div class="miditem2"><img src="edited.png" alt=""></div>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});