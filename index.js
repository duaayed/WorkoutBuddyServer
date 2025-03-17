const express = require('express') 
require('dotenv').config() 
const workoutRoutes = require('./routes/workout') 
const mongoose = require('mongoose') 
const cors = require('cors')
const userRoutes = require('./routes/user')

// express app - create a server
const app = express()
app.use(cors())

// middleware
app.use(express.json()) // transform json -> Object

// routes
app.use("/api/workouts", workoutRoutes)
app.use("/api/user", userRoutes)
// (the name u want to the route, file name)

async function connectDB() {
  try {
    // connect to db
    await mongoose.connect(process.env.MONGO_URI)
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log(
        "connected to db and listening for requests on port",process.env.PORT)
    })
  } catch (error) {
    console.log(error);
  }
}
connectDB()
