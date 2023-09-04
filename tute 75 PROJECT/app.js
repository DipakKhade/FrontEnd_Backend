const express=require('express');
const path=require('path');
const html=require('html');

app=express();
const port=8000

//  EXPRESS RELATED STUFF
app.use('/static',express.static('static'));   // serving the static files
app.use(express.urlencoded())

// PUG RELATED STUFF
app.set('view engine','pug');  // setting template engine as pug
app.set('views',path.join(__dirname, 'views')) // Set the views directory


// END POINTS
app.get('/',(req,res)=>{
    const params={}
    res.render('./home.pug', req.params)
})


// START THE SERVER
app.listen(port ,()=>{
    console.log(`server is listing on port ${port}`)
})