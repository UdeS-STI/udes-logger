import pino from 'pino'

const udesLogger = pino({
  prettyPrint: {
    forceColor: true,
  },
})

export default udesLogger
