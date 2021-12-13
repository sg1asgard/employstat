const apiURL = 'https://api.bls.gov/publicAPI/v2/timeseries/data/';
const apiKey = '6e1809347f394adabb329d1b048da986';
const apiULRv1 = 'https://api.bls.gov/publicAPI/v1/timeseries/data/';
const pokedex = 'https://pokeapi.co/api/v2/pokemon/ditto';

function getBLS() {
    fetch(apiURL, {
        method: "GET",
        mode: "no-cors",
        headers: {
            "X-Auth-Token": apiKey,
        }
    })
    .then(resp => resp.json())
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    });
  
}

getBLS();

// function getBLSv1() {
//     fetch(pokedex, {
//     method: "GET",
//     })
//     .then(resp => resp.json())
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });
  
// }

// getBLSv1();



/*
labstat@bls.gov
Thank you for registering with the Bureau of Labor Statistics Public Data API. 
*/