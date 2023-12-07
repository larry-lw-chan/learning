// ********************************************************
// * Load up Express and other dependencies
// ********************************************************
const express = require('express');
const app = express();
const path = require('path')
const methodOverride = require('method-override');
const morgan = require('morgan');
const ejsMate = require('ejs-mate');
const AppError = require('./AppError.js');

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

// Index Page
app.get('/campgrounds', wrapAsync(async (req, res, next) => {
    const campgrounds = await Campground.find({});
    if (campgrounds) {
        res.render('./campgrounds/index', {campgrounds});
    } else {
        print(campgrounds + "weird");
        throw new AppError('Page unable to load', 404);
    }
}));

// New Page
app.get('/campgrounds/new', (req, res) => {
    res.render('./campgrounds/new');
});

app.post('/campgrounds/new', wrapAsync(async (req, res, next) => {
    console.log('works')
    const campground = new Campground(req.body.campground);
    await campground.save();
    if (campground) {
        res.redirect('/campgrounds');
    } else {
        throw new AppError('Campground did not save', 404);
    }
}));

// Edit Pages
app.get('/campgrounds/:id/edit', wrapAsync(async (req, res, next) => {
    const campground = await Campground.findById(req.params.id);
    if (campground) {
        res.render('./campgrounds/edit', {campground});
    } else {
        throw new AppError('Campground edit not working', 404);
    }
}));

app.put('/campgrounds/:id/', wrapAsync(async (req, res, next) => {
    const {title, location} = req.body.campground;
    const campground = await Campground.findByIdAndUpdate(req.params.id, req.body.campground);    
    if (!campground) {
        throw new AppError('Campground update error', 404);
    } else {
        res.redirect(`/campgrounds/${req.params.id}`);
    }
}));

// Delete Page
app.delete('/campgrounds/:id', async (req, res) => {
    await Campground.findByIdAndDelete(req.params.id);
    res.redirect('/campgrounds');
});

// Detail Page
app.get('/campgrounds/:id', wrapAsync(async (req, res, next) => {
    const {id} = req.params;
    const campground = await Campground.findById(id);    
    if (campground) {
        res.render('./campgrounds/show', {campground});        
    } else {
        throw new AppError('Campground not found', 404);
    }
}));


// ********************************************************
// * Error Experiments
// ********************************************************
function wrapAsync(fn) {
    return function(req, res, next) {
        fn(req, res, next).catch(e => next(e));
    }
}

app.get('/error', (req, res) => {
    chicken.fly();
    // throw new Error('BROKEN'); 
});

// Password Check Page
function verifyPassword(req, res, next) {
    try {
        const { password } = req.query;
        if (password === 'chickennugget') {
            next();
        }
        else {
            // res.send("Password Needed!");
            throw new AppError('Password required!', 401);
        }
    } catch(e) {
        next(e);
    }
}

app.get('/admin', (res, req) => {
    throw new AppError('You are not admin', 403);
});

app.get('/secret', verifyPassword, (req, res) => {
    res.send("Correct password entered.  Someimtes I wear headphone in puboic");
});

// Error Path (place last in file...)
app.use((req, res) => {
    res.status(404).send('Error 404.  Page not found.');
});

// Custom Error Middleware Handler
const handleValidationErr = err => {
    console.log(err);
    return err;
}

app.use((err, req, res, next) => {
    console.log(err.name);  // print mongoose errors
    if (err.name === 'ValidationError') {
        err = handleValidationErr(err);
    }
    next(err);
});

app.use((err, req, res, next) => {
    // console.log("######################################");
    // console.log("################Error#################");
    // console.log("######################################");
    // console.log(err);
    const { status = 500, message = 'Something went wrong'} = err;
    res.status(status).send(message);
});

// Turn on Server
app.listen(3000, () => {
    console.log("Serving on port 3000");
});