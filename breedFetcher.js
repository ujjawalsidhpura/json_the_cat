const request = require('request');

const fetchBreedDescription = function (breedName, callback) {
  const api =
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(api, (err, res, body) => {

    if (err) {
      return callback(err, null);
    }

    //API gives an ARRAY of ONE object in it
    const data = JSON.parse(body);
    //IF no cat is found, then API returns and EMPTY array []
    //catch this error and return proper message

    // if (data.length === 0) {
    //   console.log(`Sorry. No cat breed named ${breedName} found `);
    //   return;
    // }
    if (data[0]) {
      // console.log(data[0].description)
      callback(null, data[0].description)
    } else {
      callback(`${breedName} not found.Sorry`)
    }
    //If everything goes well then return the results then 
    //First access the object from the array.
    //Then access the desired property from that cat object
    //in this example we want cat's description

  });
};

module.exports = { fetchBreedDescription };

// module.exports = fetchBreedDescription;
//Use this format IF you just want to run index.js on node, and if you want to run mocha, then use the above mentioned way to export


