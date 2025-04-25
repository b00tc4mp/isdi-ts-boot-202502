export type UserType = {
  id: string;
  username: string;
  email: string;
  password: string;
};

export type PostType = {
  id: string;
  author: { id: string; username: string };
  description: string;
  image: string;
  date: Date;
  liked: boolean;
  likes: number;
};
