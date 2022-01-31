import express from "express";
import * as models from "../models/index.js";

let router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  const data = await models.getWorkouts();
  res.json({ success: true, message: "All retrieved", payload: data });
});

/*
 - get all the workout
 - get workout by day
 - get w. by muscle group
 - get progress by exercise 
*/

/*
- post pogress
*/

export default router;
