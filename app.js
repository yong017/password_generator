const express = require('express')
const exphbs = require('express-handlebars')
const generatePassword = require('./generate_password')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(express.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.log('random password is: ', generatePassword(req.body))
  const password = generatePassword(req.body)
  res.render('index', { password: password })
})

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})