const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/books')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.log(`Couldn't connect to DB ${err}`))