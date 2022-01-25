import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS workout (id SERIAL PRIMARY KEY, day TEXT, exercise TEXT, image_url TEXT, video_url TEXT);`;

async function createWorkoutTable() {
  const workoutTable = await query(sqlString);
  console.log(workoutTable);
}

createWorkoutTable();
