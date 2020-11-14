import mongoose from 'mongoose';

export default (dbConnectionString) => mongoose.connect(dbConnectionString);