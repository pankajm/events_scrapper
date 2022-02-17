const mongoose = require('mongoose');
const config = require('config');
const logger = require('./logging').logger;

/* Database connection */

module.exports.connectDB = function(){
  const db = config.get('db');
  console.log('db is ', db);
  mongoose.connect(db, { useNewUrlParser: true , useUnifiedTopology: true})
  .then(() => logger.info(`connected to ${db}...`))
  .catch((err) => logger.error(`error connecting to ${db}...${err}`, ))
}
