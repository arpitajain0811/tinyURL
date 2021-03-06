
const Models = require('../../models');

const shorten = (longUrl, shortUrl, start) => {
  if (start >= 18) return null;
  console.log(start);
  const shortenedUrl = shortUrl.slice(start, start + 6);
  return Models.tinyurl.createObject(shortenedUrl, longUrl)
    .spread((response, created) => {
      if (!created) {
        if (longUrl === response.dataValues.longurl) {
          return response.shorturl;
        }
        const newStart = start + 6;
        return shorten(longUrl, shortUrl, newStart);
      }
      return response.shorturl;
    });
};
module.exports = shorten;
