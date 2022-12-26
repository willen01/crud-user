import { UserPrismaRepository } from "../../repositories/prisma/UserRepository.prisma";
import { DeleteUserController } from "./deleteUserController";

const userRepository = new UserPrismaRepository();
const deleteUserController = new DeleteUserController(userRepository);

export { deleteUserController };
