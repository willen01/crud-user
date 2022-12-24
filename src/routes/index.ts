import { Router } from "express";
import { createUserRouter } from "./createUser";
import { listUserRouter } from "./readUser";
import { updateUserRouter } from "./updateUser";

const router = Router();

router.use(createUserRouter);
router.use(listUserRouter);
router.use(updateUserRouter);

export { router };
