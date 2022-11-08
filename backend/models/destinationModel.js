const mongoose = require('mongoose')

const Schema = mongoose.Schema

const destinationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    travelTime: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    }
}, {timestamps: true})

module.exports = mongoose.model('Destination', destinationSchema)