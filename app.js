require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const PORT = process.env.PORT;
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// routes
app.use("/api/user", userRoutes);

// server
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
