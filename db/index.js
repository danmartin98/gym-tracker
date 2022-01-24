import pg from "pg";

const pool = new pg.Pool({
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false,
  }
});

export default function query(text, params) {
  return pool.query(text, params);
}
