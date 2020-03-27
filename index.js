const express = require ('express');
const app = express();
const ejs = require('ejs');

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(__dirname + '/views'));
// app.use(express.json());
app.use(express.urlencoded( {extended: true}));

app.get('/home', (req,res) => {
  res.render('home');
})



app.get('/shop', (req, res) => {
  res.render('shop.ejs');
  const data = {
    "title": "Shopping"
  }
});

app.get('/cart', (req,res) => {
  res.render('cart');
})

app.get('/about', (req,res) => {
  res.render('about');
})

app.get('/contact', (req,res) => {
  res.render('contact');
})

app.get('/checkout', (req,res) => {
  res.render('checkout');
})

app.get('/info', (req,res) => {
  res.render('info');
})

app.get('/success', (req,res) => {
  res.render('success ');
})





app.listen(port);
console.log(`App is running on ${port}`);
