const express = require('express');
const router = express.Router();
const scrappingService = require('../services/scrapper');

/** Get API for scrapping events data */
router.get('/scrapEvents', async (req, res, next) => {

  // get URLs from database;
  const cmUrl = `https://www.computerworld.com/article/3313417/tech-event-calendar-2020-upcoming-shows-conferences-and-it-expos.html`
  const techMemeUrl = `https://www.techmeme.com/events`
  
  /** Get Events from given URL  */

  try{
    const cwResponse = await scrappingService.scrapComputerWorld(cmUrl)
    const tmResponse = await scrappingService.scrapTechMeme(techMemeUrl)
    return res.status(200).send({...cwResponse, ...tmResponse})
  }
  catch(err){
    console.log('error in Scrapping api')
    return res.status(500).send(error);
  }
})

module.exports = router;