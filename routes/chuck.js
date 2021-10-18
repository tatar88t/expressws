import express from 'express';
const router = express.Router();
import { getChuckInfo } from '../controllers/chuckController.js';

router.get('/', getChuckInfo);

export default router;