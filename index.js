//Importing function
const fetchBreedDescription = require('./breedFetcher');

//Catching user inputs
const input = process.argv.slice(2);
const nameOfBreed = input[0]; //It should be a breed's name

fetchBreedDescription(nameOfBreed, (err, res) => {
  if (err) {
    console.log('Error: ', err);
  } else {
    console.log(res);
  }
});