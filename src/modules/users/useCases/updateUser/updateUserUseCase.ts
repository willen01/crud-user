import { IUserRepository } from "../../repositories/userRepository";

export type UpdateUserRequest = {
  name: string;
  dob: string;
  address: string;
  description: string;
};

export class UpdateUserUseCase {
  constructor(private updateUserRepository: IUserRepository) {}

  async execute(user: string, userData: UpdateUserRequest) {
    const findUserByName = await this.updateUserRepository.findUserByName(user);

    if (findUserByName == null) throw new Error("User not exists");

    return await this.updateUserRepository.update(user, userData);
  }
}
