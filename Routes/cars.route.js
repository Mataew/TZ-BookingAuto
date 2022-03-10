const { Router } = require('express')
const { carsController } = require('../Controllers/cars.controller')

const router = Router()

router.get('/cars', carsController.getCars)
router.post('/cars', carsController.addCar)
router.patch('/cars/:id', carsController.bookingCar)

module.exports = router