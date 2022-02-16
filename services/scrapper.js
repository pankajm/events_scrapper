/** Promise API to fetch events from provided URL  */

const axios = require('axios'); 
const parser = require('../utils/parser')

function scrapComputerWorld(url){

  return new Promise((resolve, reject) => {
    console.log("Getting events data for ", url);
    axios.get(url)
    .then((response) => {
      const parserResult = parser.parseComputerWorldHTML(response.data);
      console.log(parserResult);
      resolve(parserResult);
    })
    .catch((error) => {
      console.log('error in swiggy api')
      reject(error);
    })
  })
}

function scrapTechMeme(url){

  return new Promise((resolve, reject) => {
    console.log("Getting events data for ", url);
    axios.get(url)
    .then((response) => {
      const parserResult = parser.parseTechMemeHTML(response.data);
      console.log(parserResult);
      resolve(parserResult);
    })
    .catch((error) => {
      console.log('error in swiggy api')
      reject(error);
    })
  })
}

module.exports = {
  scrapComputerWorld, 
  scrapTechMeme
};