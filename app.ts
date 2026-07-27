import type { Except } from "type-fest";
type User = {
  name: string;
  age: number;
  email: string;
};

type a = Except<User, "email">;
