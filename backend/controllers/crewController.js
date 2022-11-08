const Crew = require('../models/crewModel')
const mongoose = require('mongoose')

// get all crews
const getCrews = async (req, res) => {
    const crews = await Crew.find({}).sort({createdAt: -1})

    res.status(200).json(crews)
}

// get a single crew
const getCrew = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such crew'})
    }

    const crew = await Crew.findById(id)

    if(!crew) {
        return res.status(404).json({error: 'No such crew'})
    }

    res.status(200).json(crew)
}

// create new crew
const createCrew = async (req, res) => {
    const {title, description, role, image} = req.body

    emptyFields = []

    if(!title) {
        emptyFields.push('title')
    }
    if(!role) {
        emptyFields.push('role')
    }
    if(!description) {
        emptyFields.push('description')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }

    try {
        const crew = await Crew.create({title, description, role, image})
        res.status(200).json(crew)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete crew
const deleteCrew = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such crew'})
    }

    const crew = await Crew.findOneAndDelete({_id:id})

    if(!crew) {
        return res.status(400).json({error: 'No such crew'})
    }

    res.status(200).json(crew)
}

// update crew
const updateCrew = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such crew'})
    }

    const crew = await Crew.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!crew) {
        return res.status(400).json({error: 'No such crew'})
    }

    res.status(200).json(crew)
}

module.exports = {
    getCrews,
    getCrew,
    createCrew,
    deleteCrew,
    updateCrew
}