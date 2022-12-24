import { User } from "../entities/User.entity";
import { UpdateUserRequest } from "../useCases/updateUser/updateUserUseCase";

export interface IUserRepository {
  save(data: User): Promise<User>;
  findUserByName(name: string): Promise<User | null>;
  update(name: string, data: UpdateUserRequest): Promise<User | null>;
}
