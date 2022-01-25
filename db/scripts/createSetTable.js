import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS test (id SERIAL PRIMARY KEY, exercise TEXT, reps_per_set INT, rest_seconds INT);`;

async function createSetTable() {
  const setTable = await query(sqlString);
  console.log(setTable);
}

createSetTable();
