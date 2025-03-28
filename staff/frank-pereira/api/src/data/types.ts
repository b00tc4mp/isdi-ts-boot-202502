export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}

export type UserFromRequest = Omit<User, "id">;
