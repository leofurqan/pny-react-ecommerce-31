const express = require("express")
require("dotenv").config()
require('./db')
const cors = require("cors")

//Routes
const userRoutes = require("./routes/UserRoutes")

const app = express()
app.use(cors())

app.use("/users", userRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server started at PORT: ${process.env.PORT}`)
})