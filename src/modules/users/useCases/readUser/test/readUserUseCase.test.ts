import { describe, test, expect, beforeAll } from "vitest";
import { UserRepositoryInMemory } from "../../../repositories/inMemory/UserRepositoryInMemory";
import { IUserRepository } from "../../../repositories/userRepository";
import { CreateUserUseCase } from "../../createUser/CreateUserUseCase";
import { ReadUserUseCase } from "../readUserUseCase";

let userRepository: IUserRepository;

beforeAll(async () => {
  userRepository = new UserRepositoryInMemory();
  const createUserUseCase = new CreateUserUseCase(userRepository);

  const userMock = {
    name: "default name",
    dob: "2022-03-05",
    address: "street_example",
    description: "description_test",
  };

  await createUserUseCase.execute(userMock);
});

describe("readUserUseCase", () => {
  test("shold be able to list user by name", async () => {
    const readUserUseCase = new ReadUserUseCase(userRepository);

    const findUser = await readUserUseCase.execute("default name");
    expect(findUser).toHaveProperty("id");
    expect(findUser?.name).toEqual("default name");
  });

  test("should not be able to list a unexists user", async () => {
    const readUserUseCase = new ReadUserUseCase(userRepository);

    expect(async () => {
      await readUserUseCase.execute("name");
    }).rejects.toThrow("User not found");
  });
});
