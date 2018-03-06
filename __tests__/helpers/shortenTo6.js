const short6 = require('../../src/helpers/shortenTo6');

describe('checking functions which shorten the url', () => {
  it('return string of length 6', () => {
    expect(short6('message', 0, 6).length).toEqual(6);
  });
  it('finds or creates a unique tinyurl for given longurl', () => {
    const shorturl1 = short6('http://myLongUrlss29707589', 0, 6);
    const shorturl2 = short6('http://myLongUrlss29707589', 0, 6);
    expect(shorturl1).toEqual(shorturl2);
  });
});
