const Models = require('../../models');

describe('', () => {
  beforeEach((done) => {
    Models.tinyurl.destroy({ truncate: true }).then(() => done());
  });
  it('creates new entry in db if short url does not exsists', (done) => {
    Models.tinyurl.createObject('abc123', 'http://mylongurl123.com')
      .spread((createdObject, created) => {
        expect(created).toEqual(true);
        done();
      });
  });

  it('should not create a new entry if shorturl already exists', (done) => {
    Models.tinyurl.createObject('abc123', 'http://mylongurl123.com')
      .then(() => {
        Models.tinyurl.createObject('abc123', 'http://mylongurl456.com')
          .spread((createdObject, created) => {
            expect(created).toEqual(false);
            expect(createdObject.longurl).toEqual('http://mylongurl123.com');
            done();
          });
      });
  });
  it('does not allow short url length to be less than than 6', (done) => {
    Models.tinyurl.createObject('a1', 'http://mylongurl123.com').catch((err) => {
      expect(err.message).toEqual('Validation error: Validation len on shorturl failed');
      done();
    });
  });
  it('does not allow short url length to be greater than than 6', (done) => {
    Models.tinyurl.createObject('1234567', 'http://mylongurl123.com').catch((err) => {
      expect(err.message).toEqual('Validation error: Validation len on shorturl failed');
      done();
    });
  });
});
