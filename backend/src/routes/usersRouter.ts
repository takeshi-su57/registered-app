import { Router } from 'express';
import * as UserController from '../controllers/userController';

const router = Router();

router.get('/page/:page', UserController.getAllUsers);
router.get('/get/:id', UserController.getOneUser);
router.get('/find', UserController.getUsersFind);
router.get('/count', UserController.getCountUsers);
router.post('/create', UserController.createUser);
router.put('/update/:id', UserController.updateUser);
router.delete('/delete/:id', UserController.deleteUser);

export default router;
