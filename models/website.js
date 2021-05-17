const mongoose = require('mongoose')
const Schema = mongoose.Schema

const websiteSchema = new Schema({
  originWeb: {
    type: String,
    required: true
  },
  shortenUrl: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Website', websiteSchema)
