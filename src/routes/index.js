const shorten = require('../helpers/shortenToTiny');

const route = [
  {
    method: 'PUT',
    path: '/shorten',
    handler: (request, reply) => {
      const start = 0;
      const shortenedUrl = shorten(request.payload.longUrl, start);
      // console.log(shortenedUrl);
      shortenedUrl.then((res) => {
        // console.log(res);
        reply(res);
      });
      // reply(shortenedUrl);
    },
  },
];
module.exports = route;
