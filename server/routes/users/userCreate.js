const { v4: uuidv4 } = require('uuid');

const { userCreate: userCreateDB } = require('../../database/users');
const { generateAccessToken } = require('../../utils/generateAccessToken');

module.exports = async (req, res) => {
  const { body: { name, password } } = req;
  if (!name || !password) return res.status(400).send('Dont pass required data');
  const userId = uuidv4();

  const userInfo = {
    id: userId,
    name,
    password
  };

  const { token, refreshToken } = generateAccessToken({ username: name, id: userId });

  await userCreateDB(userInfo);
  res.status(200).send({ result: true, token, refreshToken });
}