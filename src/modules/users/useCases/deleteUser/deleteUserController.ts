import { Request, Response } from "express";
import { IUserRepository } from "../../repositories/userRepository";
import { DeleteUserUseCase } from "./deleteUserUseCase";

export class DeleteUserController {
  constructor(private userRepository: IUserRepository) {}
  async handle(request: Request, response: Response) {
    const { name } = request.params;
    const useCase = new DeleteUserUseCase(this.userRepository);
    try {
      await useCase.execute(name);
      return response.status(200).json();
    } catch (error: any) {
      return response
        .status(error.statusCode || 400)
        .json({ error: error.message });
    }
  }
}
