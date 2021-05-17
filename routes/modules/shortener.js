const express = require('express')
const generator = require('../../generator')
const Website = require('../../models/website')
const router = express.Router()

router.get('/new', (req, res) => {
  Website.find()
    .lean()
    .then((websites) => {
      res.render('new', { websites })
    })
    .catch(error => console.log(error))
})

router.post('/', (req, res) => {
  const { originWeb } = req.body
  console.log(originWeb)
  let shortenUrl = 'http://3cm-url/' + generator()
  let check = Website.find(shortenUrl)
  while (check == null) {
    shortenUrl = 'http://3cm-url/' + generator()
    check = Website.find(shortenUrl)
    console.log(check)
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
})

module.exports = router
