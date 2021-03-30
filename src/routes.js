const express = require('express')
const routes = express.Router()

const views = __dirname + "/views/"

const profileProps = {
    name: "Vitor Martins",
    avatar: "https://avatars.githubusercontent.com/u/61801845?v=4",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4
}

routes.get('/', (req, res) => res.render(views + "index", { profile: profileProps }))
routes.get('/job', (req, res) => res.render(views + "job", { profile: profileProps }))
routes.get('/job/edit', (req, res) => res.render(views + "job-edit", { profile: profileProps }))
routes.get('/profile', (req, res) => res.render(views + "profile", { profile: profileProps }))

module.exports = routes;