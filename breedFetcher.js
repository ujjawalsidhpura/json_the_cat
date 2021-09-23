const request = require('request');

//Catching user inputs
const input = process.argv.slice(2);
const breedName = input[0];

const api =
  `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

// request(api, (err, res, body) => {

//   if (err) {
//     console.log(`Sorry! Cannot find ${breedName}.`)
//     return;
//   }

//   //API gives an Array of object
//   const dataArr = JSON.parse(body);
//   //Fetch the first object (there is only one object in that result array)
//   const data = dataArr[0]

//   console.log(data.description)

// })

request(api, (err, res, body) => {

  if (err) {
    console.log(`Sorry! Wrong URl or API.Please check and try again`);
    return;
  }

  //API gives an ARRAY of ONE object in it
  const data = JSON.parse(body);
  //IF no cat is found, then API returns and EMPTY array []
  //catch this error and return proper message
  if (data.length === 0) {
    console.log(`Sorry. No cat breed named ${breedName} found `);
    return;
  }
  //If everything goes well then return the results then 
  //First access the object from the array.
  //Then access the desired property from that cat object
  //in this example we want cat's description

  console.log(data[0].description);
});

