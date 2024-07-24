import { Router } from "express";

import { createUser } from "../controller/UserController";

const router = Router();

router
    .post('/register', createUser)

export default router;
