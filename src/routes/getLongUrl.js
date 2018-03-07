const getLongUrl = require('../helpers/getLongUrlFromDb');

const route = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      const longUrl = getLongUrl(request.query.url);
      longUrl.then((res) => {
        reply(res.longurl);
      });
    },
  },
];
module.exports = route;
