// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/dipak');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


// adding up scheema
const kittySchema = new mongoose.Schema({
    name: String
  });


kittySchema.methods.speak = function speak() {
    const greeting = 'my name is '+this.name
    console.log(greeting);
  };


//   locking up scheema and convert it into a model
const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'


// saving the above object

const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"

fluffy.save();
// fluffy.speak();


// find
const kittens =  Kitten.find({name:'Dipak'})


