const express = require ('express');
const app = express();
const Joi = require('joi');
const debug  = require('debug')('app: startup');
const helmet = require('helmet');
const config = require('config');
const morgan = require('morgan');
const logger = require ('../middleware/logger');
const books = require('../routes/books');
const home = require('../routes/home');



const port = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', './views');

console.log(`App Name: ${config.get('name')}`);
console.log(`Mail Server: ${config.get('mail.host')}`);
// console.log(`Mail Password: ${config.get('mail.password')}`);


app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded( {extended: true}));
app.use(logger);
app.use(helmet());
app.use('/api/books', books);
app.use('/', home);


if (app.get('env') === 'development'){
    app.use(morgan('tiny'));
    debug('Morgan is enabled...');
    
}


app.use( function(req,res,next) {
    console.log('Authenticating...');
    next();    
});




app.listen(port);
console.log(`App is running on ${port}`);
