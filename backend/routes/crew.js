const express = require('express')
const {
    getCrews,
    getCrew,
    createCrew,
    deleteCrew,
    updateCrew
} = require('../controllers/crewController')

const router = express.Router();

// GET all crews
router.get('/', getCrews)

// GET a single crew
router.get('/:id', getCrew)

// POST a new crew
router.post('/', createCrew)

// DELETE a crew
router.delete('/:id', deleteCrew)

// PATCH a crew
router.patch('/:id', updateCrew)

module.exports = router