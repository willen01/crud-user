import { UserPrismaRepository } from "../../repositories/prisma/UserRepository.prisma";
import { ReadUserController } from "./readUserController";

const userRepository = new UserPrismaRepository();
const readUserController = new ReadUserController(userRepository);

export { readUserController };
