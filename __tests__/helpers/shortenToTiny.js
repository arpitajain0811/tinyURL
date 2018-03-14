const Models = require('../../models');
const shorten = require('../../src/helpers/shortenToTiny');

describe('checking functions which shortens the url and inserts in db', () => {
  beforeEach((done) => {
    Models.tinyurl.destroy({ truncate: true }).then(() => done());
  });
  it('handles collision and gives different short urls for different long urls', (done) => {
    const longUrl1 = 'http://myLongUrl1';
    const longUrl2 = 'http://myLongUrl2';
    const shortUrl = 'qwertyuioplkjhgfdsazxc';
    console.log('testing with the first one');
    shorten(longUrl1, shortUrl, 0).then(() => {
      shorten(longUrl2, shortUrl, 0).then((res) => {
        expect(res).toEqual('uioplk');
        done();
      });
    });
  });
  it('return same short Url for the same long urls', (done) => {
    const longUrl1 = 'http://myLongUrl1';
    const longUrl2 = 'http://myLongUrl1';
    const shortUrl = 'qwertyuioplkjhgfdsazxc';
    shorten(longUrl1, shortUrl, 0).then((res1) => {
      shorten(longUrl2, shortUrl, 0).then((res2) => {
        expect(res1).toEqual(res2);
        done();
      });
    });
  });
});
