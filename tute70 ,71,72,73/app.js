const express=require('express');
const pug = require('pug');
const fs = require('fs');
const path=require('path')

const app=express();
const port=8000

let name;
let age;
//  EXPRESS RELATED STUFF
app.use('/static',express.static('static'));   // serving the static files
app.use(express.urlencoded())

// PUG RELATED STUFF
app.set('view engine','pug');  // setting template engine as pug
app.set('views',path.join(__dirname, 'views')) // Set the views directory

// END POINTS
app.get('/',(req,res)=>{
    res.render('../view/index.pug', req.params)
})

app.post('/',(req,res)=>{
    console.log(Object.body)
    
    // sunbmitted responce
    name=req.body.name
    age=req.body.age
    gender=req.body.gender
    BMI=req.body.BMI
   
    let OutputToWrite= name, age,gender,BMI

    // writing the submitted info into a file 

    fs.readFileSync('output.txt',OutputToWrite)


    const params={'message':'Your form is submitted'}
    res.status(200).render('../view/index.pug', res.params)
})



// START THE SERVER
app.listen(port ,()=>{
    console.log(`server is listing on port ${port}`)
})





//   commenting the end points for tute 73
/*
app.get('/demo', (req, res) => {                
    res.render('demo', { title: 'Hey my name is Dipak', message: 'This is render through pug' }) //making the end point for pug
  }) 


app.get('/',(req,res)=>{
    res.send('This is a express')
});


app.get('/about',(req,res)=>{
    res.send('This is a about page')
});


app.post('/about',(req,res)=>{
    res.send('This is a post requset')
});


app.listen(port,()=>{
    console.log(`The app is listinin on port ${port}`)
})
*/