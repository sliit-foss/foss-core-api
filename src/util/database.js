import mongoose, { connect } from 'mongoose';
import config from '../config';

export default () => mongoose.connect(config.dbConnectionString);