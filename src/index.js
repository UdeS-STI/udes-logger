import pino from 'pino'

const udesLogger = pino({
  enabled: !process.env.NOLOG,
  prettyPrint: {
    forceColor: true,
  },
})

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
  udesLogger,
}
