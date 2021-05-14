// import modules
const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')

const PORT = 3000

const routes = require('./routes')
require('./config/mongoose')
const app = express()

app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: 'hbs',
  helpers: {
    eq: function (v1, v2) {
      return (v1 === v2)
    }
  }
}))

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)



app.listen(PORT, () => { console.log(`This app is running on http://localhost:${PORT}`) })
