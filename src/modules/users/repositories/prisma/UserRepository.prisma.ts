import { prismaClient } from "../../../../infra/database/prisma.config";
import { User } from "../../entities/User.entity";
import { UserMapper } from "../../mapper/user.map";
import { UpdateUserRequest } from "../../useCases/updateUser/updateUserUseCase";
import { IUserRepository } from "../userRepository";

export class UserPrismaRepository implements IUserRepository {
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

  async update(name: string, data: UpdateUserRequest): Promise<User | null> {
    const user: unknown = await prismaClient.user.update({
      where: {
        name,
      },
      data: {
        ...data,
        dob: new Date(data.dob),
      },
    });

    if (user) {
      return user as User;
    }

    return null;
  }
}
