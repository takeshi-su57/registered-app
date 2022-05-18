import { Router } from 'express';
import * as UserController from '../controllers/userController';

const router = Router();

router.get('/:page', UserController.getAll);

export default router;
