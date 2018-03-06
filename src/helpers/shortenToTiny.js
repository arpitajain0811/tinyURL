const Models = require('../../models');
const shorten6 = require('./shortenTo6');

const shorten = (longUrl, start) => {
  if (start >= 30) return null;
  const shortUrl = shorten6(longUrl, start, start + 6);
  return Models.tinyurl.findOrCreate({
    where: {
      shorturl: shortUrl,
    },
    defaults: {
      longurl: longUrl,
    },
  }).spread((response, created) => {
    if (!created) {
      if (longUrl === response.dataValues.longurl) {
        return shortUrl;
      }
      return shorten(longUrl, start + 6);
    }
    return response.shorturl;
  });
};
module.exports = shorten;
