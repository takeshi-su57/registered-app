import { Router } from 'express';
import * as UserController from '../controllers/userController';

const router = Router();

router.get('/:page', UserController.getAllUsers);
router.post('/create', UserController.createUser);
router.put('/update/:id', UserController.updateUser);
router.delete('/delete/:id', UserController.deleteUser);

export default router;
