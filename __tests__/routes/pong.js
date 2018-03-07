const server = require('../../src/server');

describe('checking ping route', () => {
  it('return pong', (done) => {
    const options = {
      method: 'GET',
      url: '/ping',
    };
    server.inject(options, (response) => {
      expect(response.result).toEqual('pong');
      done();
    });
  });
});
