import { prismaClient } from "../../../../infra/database/prisma.config";
import { User } from "../../entities/User.entity";
import { UserMapper } from "../../mapper/user.map";
import { IUserRepository } from "../userRepository";

export class UserRepository implements IUserRepository {
  async save(data: User): Promise<User> {
    const user = await prismaClient.user.create({
      data: {
        name: data.name,
        dob: new Date(data.dob),
        address: data.address,
        description: data.description,
      },
    });

    return UserMapper.prismaToEntityUser(user);
  }
  async findUserByName(name: string): Promise<User | null> {
    const user = await prismaClient.user.findFirst({
      where: {
        name,
      },
    });

    if (user) return UserMapper.prismaToEntityUser(user);
    return null;
  }
}
