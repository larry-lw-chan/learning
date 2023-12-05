// ********************************************************
// * Load up Express and other dependencies
// ********************************************************
const express = require('express');
const app = express();
const path = require('path')
const methodOverride = require('method-override');
const morgan = require('morgan');
const ejsMate = require('ejs-mate');

// Express Settings
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Express Middleware
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(morgan('tiny'));
// app.use((req, res, next) => {
//     console.log("This is my first middleware");
//     next();
// });
// app.use((req, res, next) => {
//     console.log("This is my second middleware");
//     next();
// });
// app.use((req, res, next) => {
//     req.requestTime = Date.now();
//     console.log(req.method.toUpperCase(), req.path);
//     next();
// });

// ********************************************************
// * Mongoose Configurations
// ********************************************************
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Database connected"));

// Load Models
const Campground = require('./models/campground');

// ********************************************************
// * Express Routes
// ********************************************************
app.get('/', (req, res) => {
    res.render('home');
});

// Error Testing
app.get('/error', (req, res) => {
    try {
        chicken.fly();
    } 
    catch (err) {
        console.log(err);
    }
    finally {
        res.send("Error Caught");
    }
});

// Index Page
app.get('/campgrounds', async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('./campgrounds/index', {campgrounds});
});

// New Page
app.get('/campgrounds/new', (req, res) => {
    res.render('./campgrounds/new');
});

app.post('/campgrounds/new', async (req, res) => {
    console.log('works')
    const {title, location} = req.body.campground;
    const campground = new Campground(req.body.campground);
    await campground.save();
    res.redirect('/campgrounds');
});

// Edit Pages
app.get('/campgrounds/:id/edit', async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    res.render('./campgrounds/edit', {campground});
});

app.put('/campgrounds/:id/', async (req, res) => {
    const {title, location} = req.body.campground;
    await Campground.findByIdAndUpdate(req.params.id, req.body.campground);
    res.redirect(`/campgrounds/${req.params.id}`);
});

// Delete Page
app.delete('/campgrounds/:id', async (req, res) => {
    await Campground.findByIdAndDelete(req.params.id);
    res.redirect('/campgrounds');
});

// Detail Page
app.get('/campgrounds/:id', async (req, res) => {
    const {id} = req.params;
    const campground = await Campground.findById(id);
    res.render('./campgrounds/show', {campground})
});

// Error Path (place last in file...)
app.use((req, res) => {
    res.status(404).send('Error 404.  Page not found.');
});

// Turn on Server
app.listen(3000, () => {
    console.log("Serving on port 3000");
});