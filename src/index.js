import pino from 'pino'

const udesLogger = pino({
  prettyPrint: {
    forceColor: true,
  },
})

udesLogger.fatal = () => {}
udesLogger.error = () => {}
udesLogger.warn = () => {}
udesLogger.info = () => {}
udesLogger.debug = () => {}
udesLogger.trace = () => {}

export default udesLogger
