import run from './app';
import config from './config';
import logger from './util/logger';

console.log = message => logger.info(message);

/**
 * startup application
 */
run({ port: config.port,  dbConnectionString: config.databaseURL });