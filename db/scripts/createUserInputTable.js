import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS userInput (id SERIAL PRIMARY KEY, exercise TEXT, set_number INT, weight_kg INT, comment TEXT, date INT);`;

async function createUserInputTable() {
  const userInputTable = await query(sqlString);
  console.log(userInputTable);
}

createUserInputTable();
