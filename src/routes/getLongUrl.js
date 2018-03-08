const getLongUrl = require('../helpers/getLongUrlFromDb');
const client = require('../redisClient');

const route = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      client.get(request.query.url, (err, response) => {
        if (response === null) {
          const longUrl = getLongUrl(request.query.url);
          longUrl.then((res) => {
            client.set(request.query.url, res.longurl);
            reply(res.longurl);
          });
        } else {
          reply(response);
        }
      });
    },
  },
];
module.exports = route;
