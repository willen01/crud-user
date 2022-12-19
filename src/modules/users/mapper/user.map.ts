import { User } from "../entities/User.entity";
import { User as UserPrisma } from "@prisma/client";

export class UserMapper {
  static prismaToEntityUser = (data: UserPrisma): User => {
    return {
      id: data.id,
      name: data.name,
      address: data.address,
      description: data.description,
      dob: `${data.dob}`,
      createdAt: data.createAt,
    };
  };
}
