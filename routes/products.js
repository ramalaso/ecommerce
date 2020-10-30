const express = require('express');
const router = express.Router();

const products = [
    {
        name: 'Red Shoes',
        price: 75,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    },
    {
        name: 'Blue Shoes',
        price: 175,
        image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
        name: 'Yellow Shoes',
        price: 50,
        image: "https://images.unsplash.com/photo-1514989771522-458c9b6c035a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    },
];

router.get('/', (req, res) => {
    res.render('products', { products });
});

module.exports = router;