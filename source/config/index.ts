import { config } from 'dotenv';

config();

export default {
  TOKEN_SECRET: process.env.TOKEN_SECRET + '',
  FRONT_URL: process.env.FRONT_URL + '',
  BACK_URL: process.env.BACK_URL + '',
  DB_LIQUOR: process.env.DB_LIQUOR + '',
  DB_CHAT: process.env.DB_CHAT + '',
  HOST: process.env.HOST + '',
  MODE: process.env.MODE + '',
  PORT: process.env.PORT + ''
};
