const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()

require("dotenv").config()

app.use(cors())
app.use(express.json())
app.use(require("./routes/index"));

const connect = async () => {
  await mongoose.connect(process.env.SERVER_MONGO)
  console.log("Соединение успешно установлено")
  app.listen(process.env.PORT, () => {
    console.log(`Server has been started on port http://localhost:${process.env.PORT}`)
  })
}

connect()