// define generatePassword function
function generatePassword() {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // dummy data of req.body
  const option = {
    length: 12,
    lowercase: 'on',
    uppercase: 'on',
    numbers: 'on',
    excludeCharacters: '40'
  }
  console.log('option', option)

  // create a collection to store things user picked up
  let collection = []

  if (option.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (option.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (option.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (option.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  console.log('collection', collection)

  // remove things user do not need

  // start generating password

  // return the generated password
  console.log('This is working')
}

generatePassword()