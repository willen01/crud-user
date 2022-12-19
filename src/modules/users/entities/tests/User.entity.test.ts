import { describe, expect, test } from "vitest";
import { User } from "../User.entity";

describe("User entity", () => {
  test("should be able to create a new User", async () => {
    const user = await User.create({
      name: "jhon Doe",
      dob: new Date("2022-03-03"),
      address: "example address n° 15",
      description: "testing create a new user",
    });

    console.log(user);

    expect(user).toBeInstanceOf(User);
    expect(user).toHaveProperty("id");
  });
});
