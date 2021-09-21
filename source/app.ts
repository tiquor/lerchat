import express from 'express';
import app from './index';
import cors from 'cors';
import path from 'path';
import logger from 'morgan';
import indexRoutes from './routes/index.routes';

app.use(
  cors({
    origin: app.get('FRONT')
  })
);

app.use(indexRoutes);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('PORT'), () =>
  console.log(`Listen on port ${app.get('BACK')}`)
);
