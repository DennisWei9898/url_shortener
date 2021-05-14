const Website = require('../website')
const db = require('../../config/mongoose')

db.once('open', () =>{
  console.log('mongodb connected')
})