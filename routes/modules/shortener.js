// const express = require('express')
// const generator = require('../../generator')
// const Website = require('../../models/website')
// const router = express.Router()
// const PORT = process.env.PORT || 3000
// const baseUrl = process.env.baseUrl || `http://localhost:${PORT}/`

// router.get('/new', (req, res) => {
//   Website.find()
//     .lean()
//     .then((websites) => {
//       res.render('new', { websites })
//     })
//     .catch(error => console.log(error))
// })

// router.post('/', (req, res) => {
//   const { originWeb } = req.body
//   console.log(originWeb)
//   let shortenUrl = `${baseUrl}${generator()}`
//   let check = Website.find(shortenUrl)
//   while (check == null) {
//     shortenUrl = `${baseUrl}${generator()}`
//     check = Website.find(shortenUrl)
//   }

//   return Website.create({
//     originWeb: originWeb,
//     shortenUrl: shortenUrl
//   })
//     .then((website) => {
//       res.render('index', { shortenUrl: website.shortenUrl, originWeb: website.originWeb })
//       console.log(website.shortenUrl)
//     })
//     .catch(error => console.log(error))
// })

// router.get('/:shortenUrl', (req, res) => {
//   const shortenUrl = `${baseUrl}${req.params.shortenUrl}`

//   Website.find({ shortenUrl })
//     .lean()
//     .then((website) => { res.redirect(website[0].originWeb) })
//     .catch(error => console.log(error))
// })

// module.exports = router
