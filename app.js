// import modules
const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const Website = require('./models/website')
const PORT = process.env.PORT || 3000

const generator = require('./generator')

// const routes = require('./routes')
require('./config/mongoose')
const app = express()
require('dotenv').config()
const homeUrl = process.env.baseUrl || `http://localhost:${PORT}/`

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

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const { originWeb } = req.body
  console.log(`original web :${originWeb}`)
  // check  whether original url is exist or not
  Website.find()
    .lean()
    .then((website) => {
      const checkOriginWeb = website.find((newUrl) => newUrl.originWeb === originWeb)
      console.log(checkOriginWeb)
      if (checkOriginWeb) {
        const shortenUrl = checkOriginWeb.shortenUrl
        console.log(`inside1:${shortenUrl}`)
        return res.render('index', { originWeb: originWeb, shortenUrl: shortenUrl })
      } else {
        // prevent repeat url show up
        let shortenUrl = `${homeUrl}${generator()}`
        let checkShortenUrl = Website.find(shortenUrl)
        // run loop until new shorten url is create
        while (checkShortenUrl === null) {
          shortenUrl = `${homeUrl}${generator()}`
          checkShortenUrl = Website.find(shortenUrl)
        }

        return Website.create({
          originWeb: originWeb,
          shortenUrl: shortenUrl
        })
          .then((website) => {
            res.render('index', { shortenUrl: website.shortenUrl, originWeb: website.originWeb })
            console.log(website.shortenUrl)
          })
          .catch(error => console.log(error))
      }
    })
})

// remind user to input the url in index.hbs
app.get('/:shortenUrl', (req, res) => {
  const shortenUrl = `${homeUrl}${req.params.shortenUrl}`

  Website.find({ shortenUrl })
    .lean()
    .then((website) => { res.redirect(website[0].originWeb) })
    .catch(error => console.log(error))
})

app.listen(PORT, () => { console.log(`This app is running on http://localhost:${PORT}`) })
