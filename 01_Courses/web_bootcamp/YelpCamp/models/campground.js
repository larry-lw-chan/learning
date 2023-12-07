// ********************************************************
// * Load mongoose and other dependencies
// ********************************************************
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampgroundSchema = Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
    location: String
});

module.exports = mongoose.model('Campground', CampgroundSchema);