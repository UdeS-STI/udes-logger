import pino from 'pino'

export udesLogger = pino({
  prettyPrint: {
    forceColor: true,
  }
})

