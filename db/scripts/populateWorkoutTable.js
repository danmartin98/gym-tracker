import query from "../index.js";
import workout from "../../data.js";

export default async function populateWorkoutTable() {

workout.forEach(element => {
    const day = element.day;
    const muscleGroup = element.muscleGroup;
    const exercise = element.exercise;
    const sets = element.sets;
    const repsPerSet = element.repsPerSet;
    const restInSeconds = element.restInSeconds;
    const video = element.video;
    const image = element.image;
    const sqlString = `INSERT INTO workout (day, muscle_group, exercise, sets, reps_per_set, rest_seconds, image_url, video_url) VALUES $1, $2, $3, $4, $5, $6, $7, $8;`;
    const result = await query(sqlString, [day, muscleGroup, exercise, sets, repsPerSet, restInSeconds, video, image]);
    console.log(result.rows);
    return result.rows;

})
}

populateWorkoutTable()

