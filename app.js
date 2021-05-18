// import modules
const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const Website = require('./models/website')
const PORT = process.env.PORT || 3000
const baseUrl = process.env.baseUrl || `http://localhost:${PORT}/`

const generator = require('./generator')

// const routes = require('./routes')
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

// app.use(routes)

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const { originWeb } = req.body
  console.log(originWeb)
  let shortenUrl = `${baseUrl}${generator()}`
  // let check = Website.find(shortenUrl)
  // while (check == null) {
  //   shortenUrl = `${baseUrl}${generator()}`
  //   check = Website.find(shortenUrl)
  // }

  return Website.create({
    originWeb: originWeb,
    shortenUrl: shortenUrl
  })
    .then((website) => {
      res.render('index', { shortenUrl: website.shortenUrl, originWeb: website.originWeb })
      console.log(website.shortenUrl)
    })
    .catch(error => console.log(error))
})

// app.get('/:shortenUrl', (req, res) => {
//   const shortenUrl = `${baseUrl}${req.params.shortenUrl}`

//   Website.find({ shortenUrl })
//     .lean()
//     .then((website) => { res.redirect(website[0].originWeb) })
//     .catch(error => console.log(error))
// })

app.listen(PORT, () => { console.log(`This app is running on http://localhost:${PORT}`) })
