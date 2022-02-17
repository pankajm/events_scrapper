const express = require('express');
const { Event } = require('../models/events');
const router = express.Router();
const { errors } = require('../constants');
const { logger } = require('../startup/logging');
const scrappingService = require('../services/scrapper');

/** Get API for scrapping events data */
router.get('/scrapEvents', async (req, res, next) => {
  
  /** Get Events from given URLs  */

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
    logger.error('error in Scrapping api')
    return res.status(500).send(err);
  }
})

/* API to expose events data stored in DB to client */
router.get('/getEventsData', async(req, res, next) => {
  Event.find()
  .then(result=>res.send(result))
  .catch(error=>next(error))
})

module.exports = router;