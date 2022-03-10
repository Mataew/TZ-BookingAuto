const mongoose = require('mongoose')

const carSchema = mongoose.Schema({
  number: {
    type: String,
    required: true
  },
  seatNumber: {
    type: Number,
    required: true
  },
  dayPrice: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: Number,
    required: true
  },
  booked: {
    type: Boolean,
    default: false
  }
})

const Car = mongoose.model('Car', carSchema)

module.exports = Car