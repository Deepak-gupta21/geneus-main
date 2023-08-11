import express from 'express';
import {signup, login, contact} from '../controllers/auth.js';

const router=express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/contact",contact);

// module.exports = router;
export default router;

