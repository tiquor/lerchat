import { config } from 'dotenv';

config();

export default {
  AUTH_SECRET: process.env.AUTH_SECRET + '',
  FRONT_URL: process.env.FRONT_URL + '',
  BACK_URL: process.env.BACK_URL + '',
  DB_CHAT: process.env.DB_CHAT + '',
  MODE: process.env.MODE + '',
  HOST: process.env.HOST + '',
  PORT: process.env.PORT + ''
};
