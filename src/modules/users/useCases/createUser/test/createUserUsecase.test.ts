import { test, describe, expect } from "vitest";
import { UserRepositoryInMemory } from "../../../repositories/inMemory/UserRepositoryInMemory";
import { CreateUserUseCase } from "../CreateUserUseCase";

describe("createUser UseCase", () => {
  test("should be abe to create a new doctor", async () => {
    const userRepository = new UserRepositoryInMemory();
    const createUserUseCase = new CreateUserUseCase(userRepository);

    const user = await createUserUseCase.execute({
      name: "default name",
      dob: "2022-03-05",
      address: "street_example",
      description: "description_test",
    });

    expect(user).toHaveProperty("id");
  });

  test("should not be able to create a exists user", async () => {
    const userRepository = new UserRepositoryInMemory();
    const createUserUseCase = new CreateUserUseCase(userRepository);

    const user = {
      name: "default name",
      dob: "2022-03-05",
      address: "street_example",
      description: "description_test",
    };

    const userDuplicated = {
      name: "default name",
      dob: "2022-03-05",
      address: "street_example",
      description: "description_test",
    };

    await createUserUseCase.execute(user);

    expect(async () => {
      await createUserUseCase.execute(userDuplicated);
    }).rejects.toThrow("User already registered");
  });
});
