const jwt = require('jsonwebtoken');

const generateAccessToken = ({ username, id }) => {
  const token = jwt.sign({ username, id }, process.env.JWT_KEY, { expiresIn: '1800s' });
  const refreshToken = jwt.sign({ username, id }, process.env.JWT_REFRESH_KEY, { expiresIn: '50000s'});

  return { token, refreshToken };
}

module.exports = { generateAccessToken };
