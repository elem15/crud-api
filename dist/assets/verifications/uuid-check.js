const { validate } = require("uuid");
module.exports = (num) => {
  if (validate(num)) {
    // if(/^[0-9A-F]{8}-[0-9A-F]{4}-[1][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(num)) {
    return false;
  }
  return true;
}