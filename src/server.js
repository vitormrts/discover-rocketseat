const express = require('express')
const server = express()
const routes = require('./routes');

// Use template engine EJS
server.set('view engine', 'ejs')

// Enable static files
server.use(express.static("public"))

server.use(routes)

server.listen(3000, () => console.log("The server is running"))
