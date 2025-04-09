import { model, Schema } from "mongoose";
import { IUser } from "../../types.js";

const user = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    min: 3,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 25,
  },
});

const User = model<IUser>("User", user);

export { User };
