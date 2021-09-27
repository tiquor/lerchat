import app from './index';
import httpServer from 'http';
import { createApplication } from './libs/application';

const http = httpServer.createServer(app);

http.listen(app.get('PORT'), () =>
  console.log(`Listen on port ${app.get('BACK')}`)
);

createApplication(http, {
  cors: {
    origin: [app.get('FRONT')]
  }
});
