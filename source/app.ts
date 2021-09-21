import express from 'express';
import app from './index';
import cors from 'cors';
import path from 'path';
import logger from 'morgan';

app.use(
  cors({
    origin: app.get('FRONT'),
    credentials: true
  })
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('PORT'), () =>
  console.log(`Listen on port http://localhost:${app.get('PORT')}`)
);
