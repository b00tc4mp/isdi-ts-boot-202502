export type UserType = {
  id: string;
  username: string;
  email: string;
  password: string;
};

export type PostType = {
  id: string;
  author: string;
  description: string;
  image: string;
  date: Date;
};
