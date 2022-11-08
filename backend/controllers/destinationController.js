const Destination = require('../models/destinationModel');
const mongoose = require('mongoose');


// get all destinations
const getDestinations = async (req, res) => {
    const destinations = await Destination.find({}).sort({createdAt: -1})

    res.status(200).json(destinations)
}

// get a single destination
const getDestination = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such destination'})
    }

    const destination = await Destination.findById(id)

    if(!destination) {
        return res.status(404).json({error: 'No such destination'})
    }

    res.status(200).json(destination)
}

// create new destination
const createDestination = async (req, res) => {
    const {title, distance, description, travelTime, image} = req.body

    let emptyFields = []

    if(!title) {
        emptyFields.push('title')
    }
    if(!distance) {
        emptyFields.push('distance')
    }
    if(!description) {
        emptyFields.push('description')
    }
    if(!travelTime) {
        emptyFields.push('travelTime')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }

    // add destination to db
    try {
        const destination = await Destination.create({title, distance, description, travelTime, image})
        res.status(200).json(destination)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete destination
const deleteDestination = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such destination'})
    }

    const destination = await Destination.findOneAndDelete({_id: id})

    if(!destination) {
        return res.status(400).json({error: 'No such destination'})
    }

    res.status(200).json(destination)

}

// update destination
const updateDestination = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such destination'})
    }

    const destination = await Destination.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!destination) {
        return res.status(400).json({error: 'No such destination'})
    }

    res.status(200).json(destination)

}

module.exports = {
    getDestinations,
    getDestination,
    createDestination,
    deleteDestination,
    updateDestination
}