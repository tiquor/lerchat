import { config } from 'dotenv';

config();

export default {
  TOKEN_SECRET: process.env.TOKEN_SECRET + '',
  TOKEN_ISSUER: process.env.TOKEN_ISSUER + '',
  EXPIRE_TIME: process.env.EXPIRE_TIME + '',
  FRONT_URL: process.env.FRONT_URL + '',
  UC_DB: process.env.UC_DB + '',
  UL_DB: process.env.UL_DB + '',
  PORT: process.env.PORT + ''
};