import { Router } from 'express';
import * as UserController from '../controllers/userController';

const router = Router();

router.post('/', UserController.createUser);
router.get('/:page', UserController.getAll);

export default router;
