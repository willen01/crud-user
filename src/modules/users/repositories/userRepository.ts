import { User } from "../entities/User.entity";

export interface IUserRepository {
  save(data: User): Promise<User>;
  findUserByName(name: string): Promise<User | null>;
}
