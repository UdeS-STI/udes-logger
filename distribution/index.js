'use strict';

var _pino = require('pino');

var _pino2 = _interopRequireDefault(_pino);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var udesLogger = (0, _pino2.default)({
  enabled: !process.env.NOLOG,
  prettyPrint: {
    forceColor: true
  }
});

/**
 * udesLogger
 * @typedef {Object} udesLogger
 * @property {function(string)} trace
 * @property {function(string)} debug
 * @property {function(string)} info
 * @property {function(string)} warn
 * @property {function(string)} error
 * @property {function(string)} fatal
 */

/**
 * @type {udesLogger}
 */
module.exports = {
  udesLogger: udesLogger
};