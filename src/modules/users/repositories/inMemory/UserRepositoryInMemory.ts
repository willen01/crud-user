import { User } from "../../entities/User.entity";
import { IUserRepository } from "../userRepository";

export class UserRepositoryInMemory implements IUserRepository {
  user: User[];

  private static instance: UserRepositoryInMemory;

  constructor() {
    this.user = [];
  }

  static getInstance() {
    if (!UserRepositoryInMemory.instance) {
      UserRepositoryInMemory.instance = new UserRepositoryInMemory();
    }

    return UserRepositoryInMemory.instance;
  }

  async save(data: User): Promise<User> {
    this.user.push(data);
    return data;
  }

  async findUserByName(name: string): Promise<User | null> {
    return this.user.find((user) => user.name == name) || null;
  }
}
