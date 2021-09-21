import { config } from 'dotenv';

config();

export default {
  TOKEN_SECRET: process.env.TOKEN_SECRET + '',
  FRONT_URL: process.env.FRONT_URL + '',
  BACK_URL: process.env.BACK_URL + '',
  DB_TIQUOR: process.env.DB_TIQUOR + '',
  DB_CHAT: process.env.DB_CHAT + '',
  MODE: process.env.MODE + '',
  HOST: process.env.HOST + '',
  PORT: process.env.PORT + ''
};
