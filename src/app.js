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

app.use('/',require('./routes'));

//init router


module.exports = app