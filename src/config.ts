import db from './database'
import dotenv from 'dotenv';

dotenv.config();

const config = db.get("config")
export default config;
