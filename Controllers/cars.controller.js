const Car = require('../Models/Car')

module.exports.carsController = {
  addCar: async (req, res) => {
    try{
      await Car.create({
        number: req.body.number,
        seatNumber: req.body.seatNumber,
        dayPrice: req.body.dayPrice,
        name: req.body.name,
        date: req.body.date
      })
      res.json('Car added')
    } catch (e) {
      res.json(e.message)
    }
  },
  bookingCar: async (req, res) => {
    try {
      await Car.findByIdAndUpdate(req.params.id,{
        booked: req.body.booked
      })
      res.json('Car updated')
    } catch (e) {
      res.json(e.message)
    }
  },
  getCars: async (req, res) => {
    try {
      const cars = await Car.find()
      res.json(cars)
    } catch (e) {
      res.json(e.message)
    }
  }

}