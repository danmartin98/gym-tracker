import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS set (id SERIAL PRIMARY KEY, exercise TEXT, reps_per_set INT, rest(seconds) INT);`;

async function createSetTable() {
  const setTable = await query(sqlString);
  console.log(setTable);
}

createSetTable();
