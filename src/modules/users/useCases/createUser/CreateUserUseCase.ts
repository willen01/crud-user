import { User } from "../../entities/User.entity";
import { IUserRepository } from "../../repositories/userRepository";

type UserRequest = {
  name: string;
  dob: Date;
  address: string;
  description: string;
};

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: UserRequest) {
    if (!data.name || !data.dob || !data.address || !data.description) {
      throw new Error("incompleted fields");
    }

    const existUser = await this.userRepository.findUserByName(data.name);
    if (existUser) throw new Error("User already registered");

    const user = await User.create(data);
    const userCreated = await this.userRepository.save(user);
    return userCreated;
  }
}
