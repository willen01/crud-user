import { UserPrismaRepository } from "../../repositories/prisma/UserRepository.prisma";
import { UpdateUserController } from "./UpdateUserController";
// import { UpdateUserController } from "./updateUserController";

const userRepository = new UserPrismaRepository();
const updateUserController = new UpdateUserController(userRepository);

export { updateUserController };
