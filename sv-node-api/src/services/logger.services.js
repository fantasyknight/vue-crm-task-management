const winston = require('winston');
require("dotenv").config();
'use strict';

const myCustomLevels = {
  levels: {
    info: 0,
    error: 1,
    warn: 2,
    success: 3
  },
  colors: {
    info: 'blue',
    error: 'read',
    warn: 'yellow',
    success: 'green'
  }
};
winston.addColors(myCustomLevels.colors);

winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  );

const winstonLevelLogger = winston.createLogger();

// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
winstonLevelLogger.add(new winston.transports.Console({
  format: winston.format.simple(),
}));


module.exports = {
  winstonLevelLogger
};
