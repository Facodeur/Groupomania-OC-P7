require("dotenv").config({ path: "./config/.env" });
const express = require('express')
const PORT = process.env.PORT

const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.status(200).json({
    status: 1,
    message: "Welcome on app !"
  })
})


app.listen(PORT, () => {
  console.log("Server running on port " + PORT)
})
