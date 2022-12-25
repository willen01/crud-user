import { describe, test, beforeAll, expect } from "vitest";
import { UserRepositoryInMemory } from "../../../repositories/inMemory/UserRepositoryInMemory";
import { IUserRepository } from "../../../repositories/userRepository";
import { CreateUserUseCase } from "../../createUser/CreateUserUseCase";
import { DeleteUserUseCase } from "../deleteUserUseCase";

let repository: IUserRepository;

beforeAll(async () => {
  repository = new UserRepositoryInMemory();
  const createUser = new CreateUserUseCase(repository);

  await createUser.execute({
    name: "jhon Doe",
    dob: "2022-03-05",
    address: "street_example",
    description: "description_test",
  });
});

describe("DeleteUserUseCase", () => {
  test("should be able delete a user exists", async () => {
    const deleteUserUseCase = new DeleteUserUseCase(repository);

    const deleteUser = await deleteUserUseCase.execute("jhon Doe");

    expect(deleteUser).toBe(true);
  });

  test("should not be able to delete unexists user", async () => {
    const deleteUserUseCase = new DeleteUserUseCase(repository);
    // const a = await deleteUserUseCase.execute("aaaa");

    expect(async () => {
      await deleteUserUseCase.execute("Jane Doe");
    }).rejects.toThrow("User not found");
  });
});
