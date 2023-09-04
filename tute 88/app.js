// const express = require('express')
// const app = express()
// const port = 3000
// const fs=require('fs')

// let form=fs.readFileSync('form.html')

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// // The form endpoint
// app.get('/form', (req, res) => {
//   res.render(form)
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })



const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;
const filecontent=fs.readFileSync('form.html')

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});