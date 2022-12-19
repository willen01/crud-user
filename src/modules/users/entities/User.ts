import { randomUUID } from "crypto";

interface IUser {
  name: string;
  dob: Date;
  address: string;
  description: string;
}

export class User {
  id: string;
  name: string;
  dob: Date;
  address: string;
  description: string;
  createdAt: Date;

  private constructor(props: IUser) {
    if (!props.name || !props.dob || !props.address || !props.description) {
      throw new Error("incompleted fields");
    }

    this.name = props.name;
    this.dob = props.dob;
    this.address = props.address;
    this.description = props.description;
    this.id = randomUUID();
    this.createdAt = new Date();
  }

  static async create(props: IUser) {
    const user = new User(props);
    return user;
  }
}
