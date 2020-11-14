require('dotenv').config();

export default {
    port: process.env.PORT || 3000,
    dbConnectionString: process.env.DB_CONNECTION_STRING
};