const jwt = require('jsonwebtoken');
const encrypt = (payload, secret) => {
  // your code here and return token
  try {
    return jwt.sign(payload, secret, { expiresIn: '1h' });
  } catch (error) {
    console.error("Encryption Error:", error);
    return null;
  }
};
const payload = { user: "Alice", role: "admin" };
const secret = "your-secret-key";

const token = encrypt(payload, secret);
console.log("Generated Token:", token);

module.exports = encrypt;
