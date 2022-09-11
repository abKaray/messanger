const mysql = require('mysql');
const waitPort = require('wait-port');

const {
  MYSQL_HOST: HOST,
  MYSQL_USER: USER,
  MYSQL_PASSWORD: PASSWORD,
  MYSQL_DB: DB,
} = process.env;

const pool = mysql.createPool({
  connectionLimit: 5,
  host: HOST,
  password: PASSWORD,
  user: USER,
  database: DB,
});

const init = async () => {
  await waitPort({ host: HOST, port : 3306});

  return new Promise((acc, rej) => {
    pool.query(
        'CREATE TABLE IF NOT EXISTS Users (id varchar(36), name varchar(255), password varchar(36))',
        err => {
            if (err) return rej(err);

            console.log(`Connected to mysql db at host ${HOST}`);
            acc();
        },
    );
});
}

module.exports = { init, db: pool }
