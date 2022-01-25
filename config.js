export const DB = {
  user: process.env.DBUSER,
  database: process.env.DBDATABASE,
  port: process.env.DBPORT,
  host: process.env.DBHOST,
  password: process.env.DBPASSWORD,
  // connectionString: process.env.DATABASE_URL,
};

export default DB;
