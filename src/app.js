import 'babel-polyfill';
import express from 'express';
import logger from './util/logger';
import connect from './util/database';
import router from './router';

console.log = (message, ...args) => logger.info(message + args);
console.error = (message, ...args) => logger.error(message + args);
console.warn = (message, ...args) => logger.warn(message + args);

/**
 * 
 */
export default async ({ port, dbConnectionString }) => {
    const app = express();
    
    app.listen(port, () => logger.info(`Listening on port ${port}`));

    app.use(router);

    connect(dbConnectionString)
        .then(() => logger.info(`Database connection successfully established`))
        .catch(err => logger.error(`Database connection failed: ${err}`));
    
    return app;
};