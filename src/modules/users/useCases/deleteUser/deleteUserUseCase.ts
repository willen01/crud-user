import { IUserRepository } from "../../repositories/userRepository";

export class DeleteUserUseCase {
  constructor(private userRepository: IUserRepository) {}
  async execute(name: string) {
    const deleteUser = await this.userRepository.delete(name);

    if (deleteUser) {
      return true;
    } else {
      throw new Error("User not found");
    }
  }
}
