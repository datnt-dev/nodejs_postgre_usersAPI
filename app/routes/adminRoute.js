import express from 'express';
import {
	createAdmin,
	updateUser2Admin
} from '../controllers/adminController';
import verifyAuth from '../middlewares/verifyAuth';

const router = express.Router();

router.post('/admin/register', createAdmin);
router.put('/user/:id/admin', verifyAuth, updateUser2Admin);

export default router;
