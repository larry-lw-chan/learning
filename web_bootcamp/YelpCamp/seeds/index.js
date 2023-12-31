// ********************************************************
// * Mongoose Configurations
// ********************************************************
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Database connected"));

// Load Seed Data
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers');

// Load Models
const Campground = require('../models/campground');

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://source.unsplash.com/collection/483251',
            description: 'Lorem ipsum dolor sit amet consectetur' +
                         'adipisicing elit. Voluptatem expedita ducimus sunt. ' +
                         'Inventore laboriosam ipsum ut praesentium enim dignissimos neque, ' +
                         'velit voluptate quam animi a ad esse at veritatis iste?',
            price
        });
        await camp.save();
    }
    const c = new Campground({
        title: 'purple fields',
    });
    await c.save();
}

seedDB().then(() => {
    db.close();
});