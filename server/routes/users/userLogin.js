const { loginUser: loginUserDB } = require('../../database/users')

module.exports = async (req, res) => {
  const { body: userInfo } = req;
  if (!userInfo.name || !userInfo.password) return res.status(400).send({ errorMessage: 'Dont pass required values' });

  const user = await loginUserDB(userInfo);
  if (!user.length) return res.status(400).send({ errorMessage: 'User dosent exist' });
  res.status(200).send({ result: user });
}