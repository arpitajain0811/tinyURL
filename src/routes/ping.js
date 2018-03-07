
const route = [
  {
    method: 'GET',
    path: '/ping',
    handler: (request, reply) => {
      reply('pong');
    },
  },
];
module.exports = route;
