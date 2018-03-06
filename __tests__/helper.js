const short6 = require('../src/helpers/shortenTo6');
const shorten = require('../src/helpers/shortenToTiny');

describe('checking functions which shorten the url', () => {
  it('return start to start+6 of the md5 hash', () => {
    expect(short6('message', 0, 6)).toEqual('78e731');
  });
  it('finds or creates a unique tinyurl for given longurl', () => {
    shorten('http://myLongUrlss29707589', 0).then((res) => {
      expect(res.length).toEqual(6);
    });
  });
});
