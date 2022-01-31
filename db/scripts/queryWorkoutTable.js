import query from "../index.js";

export default async function queryWorkoutTable() {
    // const sqlString = `SELECT * FROM workout`;
    const res = await query(`SELECT * FROM workout`);
    console.log(res);
    return res;
}

queryWorkoutTable();