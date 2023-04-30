'use strict'

const dev = {
    app: {
        port: process.env.DEV_APP_PORT || 3055
    },
    db: {
        host: process.env.DEV_APP_HOST || `0.0.0.0`,
        port: process.env.DEV_APP_PORT || 27017,
        name: process.env.DEV_APP_NAME || `admin`
    }
    
}
const pro = {
    app: {
        port: process.env.DEV_DB_PORT
    },
    db: {
        host: process.env.DEV_DB_HOST,
        port: process.env.DEV_DB_PORT,
        name: process.env.DE_DB_NAME
    }
    
}

const config = {dev}
const env = process.env.NODE_ENV || 'dev'
module.exports = config[env]