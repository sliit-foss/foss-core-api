import run from './app';
import config from './config';

/**
 * startup application
 */
run({ port: config.port,  dbConnectionString: config.dbConnectionString });