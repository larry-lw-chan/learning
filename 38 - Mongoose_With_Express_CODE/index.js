// Load Moongoose
const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand',  { useUnifiedTopology: true, useNewUrlParser: true })
        .then(() => console.log("Mongo Connection Open"))
        .catch((err) => {
            console.log("Connection Error Detected...");
            console.log(err);
        });

// Load Express and Dependencies into Project
const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const app = express();

// Express Middleware
app.use(express.urlencoded({ extended: true }));   // Parse form data in POST request body:
app.use(express.json());                           // To parse incoming JSON in POST request body:
app.use(methodOverride('_method'));                // To 'fake' put/patch/delete requests:

// // Express settings 
app.set('views', path.join(__dirname, 'views'));   // EJS and Views folder setup:
app.set('view engine', 'ejs');                     // EJS and Views folder setup:

// Express Routes
app.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.render("products/index.ejs", {products})
});

app.get('/products/new', async (req, res) => {
    res.render("products/new.ejs");
});

app.post('/products', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.redirect('/products');
});

app.get('/products/:id', async (req, res) => {
    let {id} = req.params;
    const product = await Product.findById(id);
    res.render("products/detail.ejs", {product});
});

app.get('*', (req, res) => {
    res.send("Works");
});

app.listen(3000,(req, res) => {
    console.log("Server is running");
});