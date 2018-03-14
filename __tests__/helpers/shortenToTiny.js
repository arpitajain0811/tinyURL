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
    shorten(longUrl1, shortUrl, 0).then((firstObject) => {
      Models.tinyurl.findAll().then(result => console.log(result)).then(() => {
        console.log('first one created', firstObject);
        shorten(longUrl2, shortUrl, 0).then((res) => {
          console.log('second one created', res);
          Models.tinyurl.findAll().then((allObject) => {
            console.log('allObject', allObject);
            console.log('res', res);
            expect(res).toEqual('uioplk');
            console.log('the end');
            done();
          });
        });
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
