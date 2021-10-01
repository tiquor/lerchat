import app from './index';
import cors from 'cors';
import indexRoutes from './routes';

app.use(
  cors({
    origin: app.get('FRONT')
  })
);

app.use(indexRoutes);

app.listen(app.get('PORT'), () =>
  console.log(`Listen on port ${app.get('BACK')}`)
);
