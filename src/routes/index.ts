import { Router } from "express";
import { createUserRouter } from "./createUser";
import { deleteUserRouter } from "./deleteUser";
import { listUserRouter } from "./readUser";
import { updateUserRouter } from "./updateUser";

const router = Router();

router.use(createUserRouter);
router.use(listUserRouter);
router.use(updateUserRouter);
router.use(deleteUserRouter);

export { router };
