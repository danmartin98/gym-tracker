import query from "../index.js";
import workout from "../../data.js";

export default async function populateWorkoutTable() {
  for (let i = 0; i < workout.length; i++) {
    const day = workout[i].day;
    const muscleGroup = workout[i].muscleGroup;
    const exercise = workout[i].exercise;
    const sets = workout[i].sets;
    const repsPerSet = workout[i].repsPerSet;
    const restInSeconds = workout[i].restInSeconds;
    const video = workout[i].video;
    const image = workout[i].image;
    const result = await query(
      `INSERT INTO workout (day, muscle_group, exercise, sets, reps_per_set, rest_seconds, image_url, video_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`,
      [
        day,
        muscleGroup,
        exercise,
        sets,
        repsPerSet,
        restInSeconds,
        video,
        image,
      ]
    );
    console.log(result.rows);
    // return result.rows;
  }
}

populateWorkoutTable();
