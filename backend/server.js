require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const destinations = require('./routes/destinations')
const crews = require('./routes/crew')
const technologies = require('./routes/technology')
// express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })

//routes
app.use('/api/destinations', destinations)
app.use('/api/crews', crews)
app.use('/api/technology', technologies)

// connect to db
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('connected to database')
    //listen to port
    app.listen(process.env.PORT, () => {
        console.log(`listening for request on port ${process.env.PORT}`)
    })
}).catch((error) => console.log(error))