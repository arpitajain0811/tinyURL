const shorten = require('./shorten');
const longUrl = require('./getLongUrl');
const ping = require('./ping');

module.exports = [].concat(shorten, longUrl, ping);
