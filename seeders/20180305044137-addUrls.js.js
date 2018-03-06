
const short6 = require('../src/helpers/shorten');

const shorten = () => {
  const urls = {};
  for (let i = 0; i < 1000000; i += 1) {
    let start = 0;
    const longURL = `http://myLongUrlss${i}`;
    let shortURL = short6(longURL, start, start + 6);
    while (true) {
      if (urls[shortURL] === undefined) {
        urls[shortURL] = { shorturl: shortURL, longurl: longURL };
        // console.log('$', i);
        break;
      } else {
        // console.log('#', i, shortURL);
        start += 6;
        if (start >= 30) break;
        shortURL = short6(longURL, start % 30, (start % 30) + 6);
      }
    }
  }
  return urls;
};


module.exports = {
  up: (queryInterface, Sequelize) => {
    const urls = shorten();
    return queryInterface.bulkInsert('tinyurls', Object.values(urls), {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('tinyurls', null, {});
  },
};
