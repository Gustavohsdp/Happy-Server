import { Router } from 'express';
import multer from 'multer';

import OrphanagesController from './controllers/OrphanagesController';
import UploadConfig from './config/upload';

const routes = Router();
const upload = multer(UploadConfig);

routes.get('/orphanages', OrphanagesController.Index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images') ,OrphanagesController.create);

export default routes;