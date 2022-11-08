const express = require('express')
const {
    getDestinations,
    getDestination,
    createDestination,
    deleteDestination,
    updateDestination
} = require('../controllers/destinationController')

const router = express.Router()

// GET all destinations 
router.get('/', getDestinations)

// GET single destination
router.get('/:id', getDestination)

// POST a new destination
router.post('/', createDestination)

// DELETE a destination
router.delete('/:id', deleteDestination)

// PATCH a destination
router.patch('/:id', updateDestination)

module.exports = router