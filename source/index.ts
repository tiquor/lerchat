import express from 'express';
import logger from 'morgan';
import config from './config';

const app = express();

app.set('PORT', config.PORT + '');
app.set('FRONT', config.FRONT_URL + '');
app.set('BACK', config.BACK_URL + '');
app.set('MODE', config.MODE + '');

app.use(express.json());
app.use(logger(app.get('MODE')));
app.use(express.urlencoded({ extended: false }));

export default app;
