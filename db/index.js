import pg from "pg";
import DB from "../config.js";

const pool = new pg.Pool({
  connectionString: DB.connectionString,
  // host: DB.host,
  // password: DB.password,
  // user: DB.user,
  // database: DB.database,
  // port: DB.port,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default function query(text, params) {
  return pool.query(text, params);
}
