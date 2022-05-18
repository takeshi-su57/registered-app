import { Router } from 'express';
import * as UserController from '../controllers/userController';

const router = Router();

router.post('/', UserController.createUser);
router.get('/:page', UserController.getAllUsers);
router.put('/update/:id', UserController.updateUser);

export default router;
