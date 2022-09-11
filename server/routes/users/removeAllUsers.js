const { removeAllUsers } = require('../../database/users');

module.exports = async (req, res) => {
  await removeAllUsers();
  res.status(200).send('all users are removed');
}
