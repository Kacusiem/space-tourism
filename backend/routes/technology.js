const express = require('express')
const {
    getTechnologies,
    getTechnology,
    createTechnology,
    deleteTechnology,
    updateTechnology
} = require('../controllers/technologyController')

const router = express.Router()

// GET all technologies 
router.get('/', getTechnologies)

// GET single technology
router.get('/:id', getTechnology)

// POST a new technology
router.post('/', createTechnology)

// DELETE a technology
router.delete('/:id', deleteTechnology)

// PATCH a technology
router.patch('/:id', updateTechnology)

module.exports = router