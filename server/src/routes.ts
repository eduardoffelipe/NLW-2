import express from 'express';

import Classes from './controllers/Classes';
import Connections from './controllers/Connections';

const routes = express.Router();


routes.post('/classes', Classes.createClasses);
routes.get('/classes', Classes.index);

routes.get('/connections', Connections.index);
routes.post('/connections', Connections.create);


export default routes;