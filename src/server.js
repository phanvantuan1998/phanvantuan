
const app = require("./app")
const PORT = process.env.DEV_APP_PORT

const server = app.listen( PORT, () => {
    console.log( `server start with ${PORT}`)
});

process.on('SIGINT', () => {
    server.close(() => console.log(`EXit server`))
})

