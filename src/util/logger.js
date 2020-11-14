/**
 * Logger
 * Author: Nandun Bandara
 */

import winston from 'winston';
import * as moment from 'moment';

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
        format: winston.format.combine(
                    winston.format.colorize(),
                    winston.format.timestamp(),
                    winston.format.simple(),
                )
      })
  ],
});

export default logger;

