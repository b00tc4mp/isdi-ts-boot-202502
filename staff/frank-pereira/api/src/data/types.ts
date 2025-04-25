import { Types } from "mongoose";

export type UserDocType = {
  _id: Types.ObjectId;
  username: string;
  email: string;
  password: string;
  __v: number;
};

export type PostDocType = {
  _id: Types.ObjectId;
  author: Types.ObjectId;
  image: string;
  description: string;
  date: Date;
  likes: [Types.ObjectId];
  __v: number;
};

export type PopulatedPostDocType = Omit<PostDocType, "author"> & {
  author: Pick<UserDocType, "_id" | "username">;
};
