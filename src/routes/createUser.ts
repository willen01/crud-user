import { Router } from "express";
import { createUserController } from "../modules/users/useCases/createUser";

const createUserRouter = Router();

createUserRouter.post("/user", async (request, response) => {
  await createUserController.handle(request, response);
});

export { createUserRouter };
