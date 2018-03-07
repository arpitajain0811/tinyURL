const Models = require('../../models');

const getLongUrlFromDb = shortUrl => Models.tinyurl.findOne({
  where: {
    shorturl: shortUrl,
  },
}).then(res => res);
module.exports = getLongUrlFromDb;
