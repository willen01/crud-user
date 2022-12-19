import { UserPrismaRepository } from "../../repositories/prisma/UserRepository.prisma";
import { CreateUserUseCaseController } from "./CreateUserUseCaseController";

const userRepository = new UserPrismaRepository();
const createUserController = new CreateUserUseCaseController(userRepository);

export { createUserController };
