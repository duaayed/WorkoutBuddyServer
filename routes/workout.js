const express = require('express')
const { //destructure
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

// API's 

const router = express. Router()

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router


// Before using the controller file 

// const express = require("express");
// const router = express.Router();
// const Workout = require("../models/workoutModel");
// const mongoose = require("mongoose");
// // GET all workouts
// router.get("/", async (req, res) => {
//   const workouts = await Workout.find({}).sort({ createdAt: -1 });
//   res.status(200).json(workouts);
// });

// // GET a single workout
// router.get("/:id", async (req, res) => {
//   const { id } = req.params; //the data retrieved from the URL like the id called params
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "No such workout" });
//   }
//   const workout = await Workout.findById(id);
//   if (!workout) {
//     return res.status(404).json({ error: "No such workout in DB" });
//   }
//   res.status(200).json(workout);
// }); //no need for request, will response to the user

// // POST a new workout
// router.post("/", async (req, res) => {
//   const { title, load, reps } = req.body;
//   try {
//     const workout = await Workout.create({ title, load, reps });
//     res.status(200).json(workout); //return the same record
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// }); //res is optional

// // DELETE a workout
// router.delete("/:id", async (req, res) => {
//   const { id } = req.params;
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({ error: "No such workout" });
//   }
//   const workout = await Workout.findOneAndDelete({ _id: id });
//   if (!workout) {
//     return res.status(400).json({ error: "No such workout" });
//   }
//   res.status(200).json(workout);
// });


// // UPDATE a workout
// router.patch("/:id", async (req, res) => {
//   const { id } = req.params;
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({ error: "No such workout" });
//   }
//   const workout = await Workout.findOneAndUpdate({ _id: id },{
//       ...req.body,
//     });
//   if (!workout) {
//     return res.status(400).json({ error: "No such workout" });
//   }
//   res.status(200).json(workout);
// });

// //access the router from various files
// module.exports = router;
