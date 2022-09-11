const { db } = require('../mysql');

const getUsers = () => {
  return new Promise((acc, rej) => {
    db.query(
      'SELECT * FROM Users',
      (err, rows) => {
          if (err) return rej(err);
          acc(rows);
      },
    )
  })
}

const getUser = ({ id }) => {
  return new Promise((acc, rej) => {
    db.query(
      'SELECT * FROM Users WHERE id=?',
      [id],
      (err, rows) => {
          if (err) return rej(err);
          acc(rows);
      },
    )
  })
}

const userCreate = ({ id, name, password }) => {
  return new Promise((acc, rej) => {
    db.query(
      'INSERT INTO Users (id, name, password) VALUES (?, ?, ?)',
      [id, name, password],
      (err, rows) => {
          if (err) return rej(err);
          acc(rows);
      },
    )
  })
}

const removeAllUsers = () => {
  return new Promise((acc, rej) => {
    db.query(
      'DELETE FROM Users',
      (err, rows) => {
          if (err) return rej(err);
          acc(rows);
      },
    )
  })
}

const loginUser = ({ name, password }) => {
  return new Promise((acc, rej) => {
    db.query(
      'SELECT * FROM Users WHERE name=? AND password=?',
      [name, password],
      (err, rows) => {
          if (err) return rej(err);
          acc(rows);
      },
    )
  })
}

module.exports = { getUsers, userCreate, removeAllUsers, loginUser, getUser }