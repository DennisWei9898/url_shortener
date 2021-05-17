function randomFunc (array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generator () {
  const lowerCaseLetter = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetter = lowerCaseLetter.toUpperCase()
  const numbers = '1234567890'
  let collection = []
  let password = ''
  collection = collection.concat(lowerCaseLetter.split(''))

  collection = collection.concat(upperCaseLetter.split(''))
  collection = collection.concat(numbers.split(''))
  for (let i = 0; i < 5; i++) {
    password += randomFunc(collection)
  } return password
}

module.exports = generator
