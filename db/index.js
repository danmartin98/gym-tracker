import pg from "pg";

const pool = new pg.Pool();

export default function query(text, params) {
  return pool.query(text, params);
}
