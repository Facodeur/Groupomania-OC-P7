const express = require('express')
const PORT = 5000;

const app = express()

app.get('/', (req, res) => {
  res.status(200).json({
    status: 1,
    message: "Welcome on app !"
  })
})


app.listen(PORT, () => {
  console.log("Server running on port " + PORT)
})
