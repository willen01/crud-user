import { Router } from "express";
import { createUserRouter } from "./createUser";
import { listUserRouter } from "./readUser";

const router = Router();

router.use(createUserRouter);
router.use(listUserRouter);

export { router };
