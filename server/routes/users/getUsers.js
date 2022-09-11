const { getUsers } = require('../../database/users');

module.exports = async (req, res) => {
  const users = await getUsers();
  res.status(200).send(users);
}
