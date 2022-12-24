import { Router } from "express";
import { updateUserController } from "../modules/users/useCases/updateUser";

const updateUserRouter = Router();

updateUserRouter.patch("/user/:name", async (request, response) => {
  await updateUserController.handle(request, response);
});

export { updateUserRouter };
