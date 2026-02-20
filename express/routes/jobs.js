import { Router } from 'express';
import { JobsController } from '../controllers/jobs.js';

export const jobsRouter = Router();

jobsRouter.get('/', JobsController.getAll);

jobsRouter.get('/:id', JobsController.getId);

jobsRouter.delete('/:id', JobsController.deleteId);

jobsRouter.post('/', JobsController.create);

jobsRouter.put('/:id', JobsController.update);

