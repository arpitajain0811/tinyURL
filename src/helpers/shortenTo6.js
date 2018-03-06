
const md5 = require('md5');

module.exports = (longURL, start, end) => {
  const shortURL = md5(longURL).slice(start, end);
  return shortURL;
};
