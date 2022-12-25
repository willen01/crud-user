import { User } from "../../entities/User.entity";
import { UpdateUserRequest } from "../../useCases/updateUser/updateUserUseCase";
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

  async update(
    name: string,
    userData: UpdateUserRequest
  ): Promise<User | null> {
    const userIndex = this.user.findIndex((username) => username.name == name);

    if (userIndex == -1) {
      return null;
    } else {
      const user = this.user[userIndex];
      const updatedUser = (this.user[userIndex] = {
        id: user.id,
        createdAt: user.createdAt,
        ...userData,
      });
      return updatedUser;
    }
  }

  async delete(name: string): Promise<boolean> {
    // const findUser = this.user.findIndex(item => item.name == name);
    const filteredUser = this.user.filter((item) => item.name != name);
    if (filteredUser.length != this.user.length) {
      return true;
    } else {
      return false;
    }
  }
}
