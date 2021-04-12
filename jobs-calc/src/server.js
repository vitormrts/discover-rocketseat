const express = require('express')
const server = express()
const routes = require('./routes');
const path = require('path')

// Use template engine EJS
server.set('view engine', 'ejs')

// Set views folder
server.set('views', path.join(__dirname, 'views'))

// Enable static files
server.use(express.static("public"))

server.use(express.urlencoded({ extended: true }))

server.use(routes)

server.listen(3000, () => console.log("The server is running"))
