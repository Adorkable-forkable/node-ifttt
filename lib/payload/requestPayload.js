var util = require('util');

var Payload = require('./payload');

/**
 * RequestPayload
 *
 * @constructor
 */
function RequestPayload(payload) {
  RequestPayload.super_.call(this, payload);
}
util.inherits(RequestPayload, Payload);

RequestPayload.prototype.getUser = function() {
  return this.payload.user;
};

RequestPayload.prototype.getIFTTTSource = function() {
  return this.payload.ifttt_source;
};

module.exports = RequestPayload;
