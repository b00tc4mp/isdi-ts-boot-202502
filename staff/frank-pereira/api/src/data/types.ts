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
  __v: number;
};
