const Models = require('../../models');
const getLongUrlFromDb = require('../../src/helpers/getLongUrlFromDb');

describe('Testing the getLongUrlFromDb helper', () => {
  beforeAll((done) => {
    Models.tinyurl.destroy({ truncate: true }).then(() => done());
  });
  beforeEach((done) => {
    Models.tinyurl.create({
      longurl: 'http://mylongurlfortest',
      shorturl: '123abc',
    }).then(() => {
      done();
    });
  });
  afterAll((done) => {
    Models.tinyurl.destroy({ truncate: true }).then(() => done());
  });
  it('gets longurl for the given short url', (done) => {
    getLongUrlFromDb('123abc').then((res) => {
      expect(res.longurl).toEqual('http://mylongurlfortest');
      done();
    });
  });
});
