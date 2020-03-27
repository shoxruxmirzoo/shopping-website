const express = require('express');
const router = express.Router();



router.get('/', (req,res) => {
    res.render('index', {
        title: "Book Store",
        message: "Welcome to ou Book Store"
    })
});


module.exports = router;


