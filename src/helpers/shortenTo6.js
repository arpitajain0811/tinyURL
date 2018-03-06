
const md5 = require('md5');
const bases = require('bases');

module.exports = (longURL, start, end) => {
  const shortURL = bases.toBase62(bases.fromBase16(md5(longURL))).slice(start, end);
  return shortURL;
};
