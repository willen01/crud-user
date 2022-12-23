import { Request, Response } from "express";
import { IUserRepository } from "../../repositories/userRepository";
import { ReadUserUseCase } from "./ReadUserUseCase";

export class ReadUserController {
  constructor(private userRepository: IUserRepository) {}

  async handle(request: Request, response: Response) {
    const { name } = request.params;
    try {
      const readUserCase = new ReadUserUseCase(this.userRepository);
      const user = await readUserCase.execute(name as string);
      response.json(user);
    } catch (error: any) {
      return response
        .status(error.statusCode || 404)
        .json({ error: error.message });
    }
  }
}
