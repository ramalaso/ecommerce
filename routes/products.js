const express = require('express');
const router = express.Router();

const products = [
    {
        name: 'red shoes',
        price: 75
    },
    {
        name: 'blue shoes',
        price: 175
    },
    {
        name: 'yellow shoes',
        price: 50
    },
];

router.get('/', (req, res) => {
    res.render('products', { products });
});

module.exports = router;