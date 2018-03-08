const shorten = require('../helpers/shortenToTiny');
const shorten6 = require('../helpers/shortenTo6');
const client = require('../redisClient');

const route = [
  {
    method: 'PUT',
    path: '/shorten',
    handler: (request, reply) => {
      const start = 0;
      const shorturl = shorten6(request.payload.longUrl, start, start + 22);
      const shortenedUrl = shorten(request.payload.longUrl, shorturl, start);
      shortenedUrl.then((res) => {
        client.set(res, request.payload.longUrl);
        reply(res);
      });
    },
  },
];
module.exports = route;
