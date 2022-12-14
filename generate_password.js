// define sample function to randomly return a item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}
// define generatePassword function
function generatePassword(option) {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

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

  // remove things user do not need
  if (option.excludeCharacters) {    //如果傳送的資料中有 exlcudeChracters 就要對 collection 進行過濾
    collection = collection.filter(chartacter => {
      return !option.excludeCharacters.includes(chartacter)
    })
  }
  console.log('collection', collection)

  // return error notice if collection is empty
  if (collection.length === 0) {
    return 'There is no valid character in your selection.'
  }

  // start generating password
  let password = ''
  for (let i = 0; i < Number(option.length); i++) {
    password += sample(collection)
  }
  console.log('password', password)

  // return the generated password
  console.log('This is working')
  return password
}

// export generatePassword function for other files to use
module.exports = generatePassword