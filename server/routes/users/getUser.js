const jwt = require('jsonwebtoken');
const { getUser } = require('../../database/users');

module.exports = async (req, res) => {
  const { headers } = req;
  const { id } = jwt.decode(headers.authorization);
  const userListInfo = await getUser({ id });
  const { password, ...rest } = userListInfo[0];

  res.status(200).send(rest);
}
