import { Router } from "express";
import { deleteUserController } from "../modules/users/useCases/deleteUser";

const deleteUserRouter = Router();

deleteUserRouter.delete("/user/:name", async (request, response) => {
  await deleteUserController.handle(request, response);
});

export { deleteUserRouter };
