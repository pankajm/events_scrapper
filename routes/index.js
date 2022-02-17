const express = require('express');
const { Event } = require('../models/events');
const router = express.Router();
const scrappingService = require('../services/scrapper');
const { errors } = require('../constants');

/** Get API for scrapping events data */
router.get('/scrapEvents', async (req, res, next) => {
  
  /** Get Events from given URL  */

  try{
    const cwResponse = await scrappingService.scrapComputerWorld()
    const tmResponse = await scrappingService.scrapTechMeme()

    Event.collection.insertMany([...cwResponse, ...tmResponse], function(err, result){
      if(err)
        return res.status(500).send(errors[500]);
      return res.status(200).send(errors[200]);
    });
  }
  catch(err){
    // Log this error to remote logging service like sentry or bugsnag
    console.log('error in Scrapping api')
    return res.status(500).send(err);
  }
})

module.exports = router;