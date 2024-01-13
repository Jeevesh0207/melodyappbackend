const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require("./routes/routes")
const { default: mongoose } = require('mongoose')
require("dotenv/config")

const app = express()

const CorsOptions = {
    origin: '*',
    credential: true,
    optionSuccessStatus: 200,
}

app.use(cors(CorsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', routes)

mongoose.connect(process.env.MONGO_DB_URL).then((res) => {
    console.log("Database connected Sucessfully")
}).catch((err) => {
    console.log("Error :" + err)
})

const port = 4000
const server = app.listen(port, () => {
    console.log(`Backend Run on Port: ${port}`)
})