import express from 'express';
import config from './config';
import './db';

const app = express();

app.set('HOST', config.HOST);
app.set('PORT', config.PORT);
app.set('BACK', config.BACK_URL)
app.set('FRONT', config.FRONT_URL);

export default app;
