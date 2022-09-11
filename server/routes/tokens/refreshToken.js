const jwt = require('jsonwebtoken');
const { generateAccessToken } = require('../../utils/generateAccessToken');

const { TokenExpiredError } = jwt;

const refreshToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  console.log('req_ASDASD_ASDASDASDASDASDASD :>> ', req.body);
  const { body: { refreshToken } } = req;
  const token = authHeader;
  if (token == null) return res.sendStatus(401);
  if (!refreshToken) return res.status(400).send({ message: 'Don\'t pass refresh token' });

  jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
    if (err) {
      if (err instanceof TokenExpiredError) {
        return res.status(401).send({ message: "Unauthorized! Access Token was expired!" });
      }
    
      return res.sendStatus(401).send({ message: "Unauthorized!" });
    }

    const { token, refreshToken } = generateAccessToken({ username: user.name, id: user.id });

    return res.status(200).send({ result: true, token, refreshToken });
  })
}

module.exports = { refreshToken };
