const Technology = require('../models/technologyModel')
const mongoose = require('mongoose')

// get all crews
const getTechnologies = async (req, res) => {
    const technologies = await Technology.find({}).sort({createdAt: -1})

    res.status(200).json(technologies)
}

// get a single crew
const getTechnology = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such technology'})
    }

    const technology = await Technology.findById(id)

    if(!technology) {
        return res.status(404).json({error: 'No such technology'})
    }

    res.status(200).json(technology)
}

// create new crew
const createTechnology= async (req, res) => {
    const {title, description, image} = req.body

    emptyFields = []

    if(!title) {
        emptyFields.push('title')
    }
    if(!description) {
        emptyFields.push('description')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }

    try {
        const technology = await Crew.create({title, description, image})
        res.status(200).json(technology)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete crew
const deleteTechnology = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such technology'})
    }

    const technology = await Crew.findOneAndDelete({_id:id})

    if(!technology) {
        return res.status(400).json({error: 'No such technology'})
    }

    res.status(200).json(technology)
}

// update crew
const updateTechnology = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such technology'})
    }

    const technology = await Crew.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!technology) {
        return res.status(400).json({error: 'No such technology'})
    }

    res.status(200).json(technology)
}

module.exports = {
    getTechnologies,
    getTechnology,
    createTechnology,
    deleteTechnology,
    updateTechnology
}