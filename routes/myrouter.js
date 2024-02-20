import express , {Router} from 'express';
import { readAndSend } from '../controllers/MyController.js';
 


const router = Router();

router.post("/",readAndSend);
 

export default router;