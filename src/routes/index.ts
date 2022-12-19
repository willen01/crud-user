import { Router } from "express";
import { createUserRouter } from "./createUser";

const router = Router();

router.use(createUserRouter);

export { router };
