const request = require('request');

const fetchBreedDescription = function (breedName) {
  const api =
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

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
};

module.exports = fetchBreedDescription;