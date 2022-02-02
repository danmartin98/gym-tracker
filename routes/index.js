import express from "express";
import * as models from "../models/index.js";

let router = express.Router();

/* GET ALL WORKOUTS . */
router.get("/", async function (req, res, next) {
  const data = await models.getWorkouts();
  res.json({ success: true, message: "All retrieved", payload: data });
});

/* GET DATA BY EXERCISE */

router.get("/:exercise", async function (req, res, next) {
  const exercise = req.params.exercise.split(" ").map(e => e[0].toUpperCase() + e.substring(1)).join(" ");
  console.log("This is the input:", exercise);
  const data = await models.getWorkoutByExercise(exercise);
  res.json({success: true, message:"Retrieved exercises based on inputted exercise.", payload: data});
})

/* GET WORKOUT BY DAY */
router.get("/day/:day", async function (req, res, next) {
  const day = req.params.day.toUpperCase();
  console.log("This is the day:", day);
  const data = await models.getWorkoutByDay(day);
  res.json({success: true, message: "Retrieved workouts based on the day you inputted.", payload: data});
})

/*
 - get all the workout - DONE
 - get workout by day
 - get w. by muscle group
 - get progress by exercise 
*/

/*
- post pogress
*/

export default router;
