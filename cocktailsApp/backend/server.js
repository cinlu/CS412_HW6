const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// Routes to Handle Request
const drinksRoute = require('../backend/routes/drinks')

// Setup Express.js
const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(cors())


// API Route
app.use('/api', drinksRoute)

// Error favicon.ico
app.get('/favicon.ico', (req, res) => res.status(204))

const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Error
app.use((req, res, next) => {
  // Error goes via `next()` method
  setImmediate(() => {
    next(new Error('Something went wrong'))
  })
})

app.use(function (err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})
