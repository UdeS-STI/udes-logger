'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pino = require('pino');

var _pino2 = _interopRequireDefault(_pino);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var udesLogger = (0, _pino2.default)({
  prettyPrint: {
    forceColor: true
  }
});

udesLogger.fatal = function () {};
udesLogger.error = function () {};
udesLogger.warn = function () {};
udesLogger.info = function () {};
udesLogger.debug = function () {};
udesLogger.trace = function () {};

exports.default = udesLogger;