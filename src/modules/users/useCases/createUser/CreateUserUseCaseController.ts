import { Request, Response } from "express";
import { IUserRepository } from "../../repositories/userRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserUseCaseController {
  constructor(private createUserRepository: IUserRepository) {}

  async handle(request: Request, response: Response) {
    try {
      const useCase = new CreateUserUseCase(this.createUserRepository);
      const result = await useCase.execute(request.body);
      return response.json(result);
    } catch (error: any) {
      return response
        .status(error.statusCode || 400)
        .json({ error: error.message });
    }
  }
}
