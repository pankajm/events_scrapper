/** Promise API to fetch events from provided URL  */

const axios = require('axios'); 
const parser = require('../utils/parser')
const logger = require('../startup/logging').logger;
const { cwInfo, techMemeInfo } = require('../constants') 

function scrapComputerWorld(){

  return new Promise((resolve, reject) => {
    logger.info("Getting events data for computerworld...");
    axios.get(cwInfo.url)
    .then((response) => {
      const parserResult = parser.parseComputerWorldHTML(response.data);
      resolve(parserResult);
    })
    .catch((error) => {
      logger.error('error while scrapping computerworld website')
      reject(error);
    })
  })
}

function scrapTechMeme(){

  return new Promise((resolve, reject) => {
    logger.info("Getting events data for techmeme...");
    axios.get(techMemeInfo.url)
    .then((response) => {
      const parserResult = parser.parseTechMemeHTML(response.data);
      resolve(parserResult);
    })
    .catch((error) => {
      logger.error('error while scrapping techmeme website');
      reject(error);
    })
  })
}

module.exports = {
  scrapComputerWorld, 
  scrapTechMeme
};