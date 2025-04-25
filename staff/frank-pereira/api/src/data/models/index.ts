import { model, Schema } from "mongoose";
const { ObjectId } = Schema.Types;
import { PostDocType, UserDocType } from "../types.js";

const user = new Schema<UserDocType>(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 25,
    },
  },
  { versionKey: false }
);

const post = new Schema<PostDocType>(
  {
    author: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    likes: [
      {
        type: ObjectId,
        ref: "User",
      },
    ],
  },
  { versionKey: false }
);

const User = model<UserDocType>("User", user);
const Post = model<PostDocType>("Post", post);

export { User, Post };
