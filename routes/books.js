const express = require('express');
const router = express.Router();


const books = [
    { id: 1, name: 'Harry Potter' },
    { id: 2, name: 'Dracula' },
    { id: 3, name: 'Pakapak' },
]


router.get('/', (res,req) => {
    res.send(books);
});

router.get('/:author/:name', (req,res) => {    
    res.send(`Mendurman osha ${req.params.author} kitobimning nomi ${req.params.name}`);
    console.log(req.params);
}) 

router.get('/:id', (req,res) => {
    const book = books.find(c => c.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Vashshe bunaqa kitob yo bizada');
    res.send(book);
});

router.post('/', (req,res) => {
    const result = validateBook(req.body);
    // const { error } = validateBook(req.body);       

    if (result.error) return res.status(400).send(result.error.details[0].message);

    const book = {
        id: books.length +  1,
        name: req.body.name
    };
    books.push(book);
    res.send(book);
});



router.put ('/:id', (req,res) => {
    const book = books.find(c => c.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Vashshe bunaqa kitob yo bizada');

    book.name = req.body.name;
    res.send(book.name);
});

router.delete('/:id', (req,res) => {
    const book = books.find(c => c.id === parseInt(req.params.id));
    if (!error) return res.status(404).send('Vashshe unaqa kitob yo bizada');
    
    const index = books.indexOf(book);
    books.splice(index,1);
    res.send(book);
    
})

function validateBook(book){
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(book, schema);
}

module.exports = router;