const express = require('express');
const { init } = require('./database/mysql')
const cors = require('cors');

const { HOST } = require('./constants');
const { authenticateToken } = require('./middleware/authenticateToken');
// const { refreshToken } = require('./middleware/refreshToken');
const { refreshToken } = require('./routes/tokens/refreshToken');
const { userCreate, getUsers, removeAllUsers, userLogin, getUser } = require('./routes/users');

require('dotenv').config();

const app = express();

app.use(cors());

app.use(require('body-parser').json());

init().then(() => {
  app.listen(HOST, () => console.log('Listening on port 5000!!!'));
}).catch((err) => {
  console.error(err);
  process.exit(1);
});

app.post('/api/registration', userCreate)
app.post('/api/login', userLogin)
app.post('/api/refreshToken', refreshToken)

app.get('/api/users', authenticateToken, getUsers)
app.get('/api/user', authenticateToken, getUser)
app.delete('/api/users', removeAllUsers)

// app.listen(PORT, HOST);

// console.log(`Server running on ${HOST}:${PORT}`)


// module.exports = { sendNumber };