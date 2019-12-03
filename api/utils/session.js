const jwt = require('jsonwebtoken');

const user = function(req) {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, "secret");
    req.userData = decoded;
    return decoded.userId;
}

module.exports = user;