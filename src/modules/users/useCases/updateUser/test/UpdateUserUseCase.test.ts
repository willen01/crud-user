import { beforeAll, describe, expect, test } from "vitest";
import { UserRepositoryInMemory } from "../../../repositories/inMemory/UserRepositoryInMemory";
import { IUserRepository } from "../../../repositories/userRepository";
import { CreateUserUseCase } from "../../createUser/CreateUserUseCase";
import { UpdateUserUseCase } from "../updateUserUseCase";

let repository: IUserRepository;

beforeAll(async () => {
  repository = new UserRepositoryInMemory();
  const createUserUseCase = new CreateUserUseCase(repository);

  const newUser = {
    name: "bob",
    dob: "2022-03-05",
    address: "street_example",
    description: "description",
  };

  await createUserUseCase.execute(newUser);
});

describe("updateUser", () => {
  test("should be able to update user exists", async () => {
    const updateUserUseCase = new UpdateUserUseCase(repository);

    const newUserData = {
      name: "kaka",
      dob: "2022-03-05",
      address: "street_example",
      description: "new description",
    };

    const name: string = "bob";

    const updateUser = await updateUserUseCase.execute(name, newUserData);

    expect(updateUser).toHaveProperty("id");
  });

  test("should not be able update unexist user", async () => {
    const updateUserUseCase = new UpdateUserUseCase(repository);

    const newUserData = {
      name: "Richard",
      dob: "2022-03-05",
      address: "street_example",
      description: "new description",
    };

    const name: string = "jhon";

    expect(async () => {
      await updateUserUseCase.execute(name, newUserData);
    }).rejects.toThrow("User not exists");
  });
});
