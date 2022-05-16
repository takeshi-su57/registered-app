import { Router } from 'express';
import * as UserController from '../controllers/userController';

const router = Router();

router.get('/', UserController.getAll);

export default router;
