import { Router } from "express";
import { readUserController } from "../modules/users/useCases/readUser";

const listUserRouter = Router();

listUserRouter.get("/user", async (request, response) => {
  await readUserController.handle(request, response);
});

export { listUserRouter };
