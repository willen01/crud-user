import { Request, Response } from "express";
import { IUserRepository } from "../../repositories/userRepository";
import { UpdateUserUseCase } from "./updateUserUseCase";

export class UpdateUserController {
  constructor(private userRepository: IUserRepository) {}

  async handle(request: Request, response: Response) {
    const { name } = request.params;
    const newUserData = request.body;
    try {
      const updateUseCase = new UpdateUserUseCase(this.userRepository);
      const updatedUser = await updateUseCase.execute(name, newUserData);
      return response.json(updatedUser);
    } catch (error: any) {
      return response
        .status(error.statusCode || 404)
        .json({ error: error.message });
    }
  }
}
