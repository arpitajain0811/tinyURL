

const md5 = require('md5');

const shorten = () => {
  const urls = {};
  for (let i = 0; i < 1000000; i += 1) {
    const longURL = `http://myLongUrl${i}`;
    const shortURL = md5(longURL).slice(0, 6);
    urls[shortURL] = { shorturl: shortURL, longurl: longURL };
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
