require('dotenv').config()
const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const app = express()
const compression = require('compression')
const nodemon = require('nodemon')

 // init middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())

// init db
require('./db/init.mongodb')

 // init routes
app.use('/',require('./routes'));

// handling error
app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    const statusCode = error.start || 500
    return res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        message: error.message || 'Server Error'
    })
})
module.exports = app