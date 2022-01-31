import query from "../db/index.js";

async function getWorkouts() {
  const result = await query(`SELECT * FROM workout;`);
  console.log(result);
  return result.rows;
}

async function getWorkoutByDay(input) {
  const sqlString = `SELECT * FROM workout WHERE day = $1;`;
  const result = await query(sqlString, [input]);
  return result;
}

async function getWorkoutByMuscleGroup(input) {
  const sqlString = `SELECT * FROM workout WHERE muscle_group = $1;`;
  const result = await query(sqlString, [input]);
  return result;
}

async function getProgressByExercise(input) {
  const sqlString = `SELECT * FROM userInput WHERE exercise = $1;`;
  const result = await query(sqlString, [input]);
  return result;
}

// POST
async function postProgress(input) {
  const sqlString = `INSERT INTO userInput (exercise, set, weight, comment, date) VALUES ($1, $2, $3, $4, $5) RETURNING *;`;
  const exercise = input.exercise;
  const set = input.set;
  const weight = input.weight;
  const comment = input.comment;
  const date = input.date;
  const result = await query(sqlString, [
    exercise,
    set,
    weight,
    comment,
    date,
    result,
  ]);
  return result;
}

export {
  getWorkouts,
  getWorkoutByDay,
  getWorkoutByMuscleGroup,
  getProgressByExercise,
  postProgress,
};

// Date, set number(wouldnt be inputed), weight, comment - next button is what submits the post request
// 3 seperate??
// element.value - innerText property
// for the comment - conditional statement, if blank, insert null

// make a function that allows select from the database
// select * from
