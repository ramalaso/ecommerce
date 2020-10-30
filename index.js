const express = require('express');
const app = express();
const path = require('path');
const productsRouter = require('./routes/products');
const expressLayouts = require('express-ejs-layouts');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set Templating Engine
app.use(expressLayouts);
app.set('layout', './layouts/layout');

// Set public directory
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.send({ hello: "world" });
});

app.use('/products', productsRouter);


app.listen(3000, () => {
    console.log('App listening on port 3000!');
});