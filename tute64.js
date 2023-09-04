// Node.js Modules with Examples

// importing the module

const fs=require('fs');


// reading the file 

let text= fs.readFileSync('main_tute64.txt','utf-8');
console.log(text);


//replacing 

text=text.replace('fs','fs module')


// writing the file

fs.writeFileSync('Dipak.txt',text)


