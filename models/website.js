const mongoose = require('mongoose')
const Schema = mongoose.Schema

const websiteSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  originWeb: {
    type: URL,
    required: true
  },
  shortenUrl: {
    type: URL,
    required: true
  }
})

module.exports = mongoose.model('Website', websiteSchema)
