if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY
const express = require('express')
const { request, response } = require('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.post('/weather', (request, response) => {

})

app.listen('3000', () => {
    console.log('Served Started on port http://localhost:3000')
})