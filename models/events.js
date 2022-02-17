const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
  website: {
    type: String, 
    required: true
  },
  title: {
    type: String,
  },
  date: {
    type: String,
  },
  location:{
    type:String
  }
})

const Event = mongoose.model('event', eventsSchema);

module.exports.Event = Event;