const jwt = require('jsonwebtoken');
const { TokenExpiredError } = jwt;

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader;
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_KEY, (err, user) => {
    console.log(err)

    if (err) {
      if (err instanceof TokenExpiredError) {
        return res.status(401).send({ message: "Unauthorized! Access Token was expired!" });
      }
    
      return res.sendStatus(401).send({ message: "Unauthorized!" });
    }

    req.user = user

    next()
  })
}

module.exports = { authenticateToken };
