import 'babel-polyfill';
import express from 'express';
import logger from './util/logger';
import connect from './util/database';

/**
 * 
 */
export default async ({ port, dbConnectionString }) => {
    const app = express();
    
    app.listen(port, () => logger.info(`Listening on port ${port}`));

    connect()
        .then(() => logger.info(`Database connection successfully established`))
        .catch(err => logger.error(`Database connection failed: ${err}`));
    
    return app;
};