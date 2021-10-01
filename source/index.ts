import express from 'express';
import config from './config';
import logger from 'morgan';
import './db';

const app = express();

app.set('HOST', config.HOST);
app.set('PORT', config.PORT);
app.set('BACK', config.BACK_URL);
app.set('FRONT', config.FRONT_URL);

app.use(logger(app.get('MODE')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

export default app;
