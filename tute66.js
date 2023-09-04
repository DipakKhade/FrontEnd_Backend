// serving the HTML files usinng Node.js

const http=require('http');
const fs=require('fs');

const filecontent=fs.readFileSync('tute32.html')

const server=http.createServer((req,res)=>{
    res.withHead(200,{'content-type':'text/html'})
    res.end(filecontent)
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('listing on port 8000 ')
})