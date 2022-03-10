const { Router } = require("express")
const router = Router()

router.use(require("./cars.route"))

module.exports = router