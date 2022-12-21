import { IUserRepository } from "../../repositories/userRepository";

export class ReadUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(name: string) {
    const findUserByName = await this.userRepository.findUserByName(name);

    if (findUserByName) return findUserByName;
    else throw new Error("User not exists");
  }
}
