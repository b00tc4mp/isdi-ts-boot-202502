import bcrypt from "bcryptjs";
import validate from "../../validations.js";
import errors from "../../errors/index.js";
import { UserType } from "../types.js";
import { User } from "../../data/models/index.js";

const { DuplicityError, SystemError } = errors;

const registerUser = (
  username: string,
  email: string,
  password: string
): Promise<void> => {
  validate.username(username);
  validate.email(email);
  validate.password(password);

  return bcrypt
    .hash(password, 10)
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((hash) => {
      const newUser: Omit<UserType, "id"> = {
        username,
        email,
        password: hash,
      };

      return User.create(newUser).catch((error) => {
        if (error.code === 11000)
          throw new DuplicityError("user already exists");

        throw new SystemError(error.message);
      });
    })
    .then(() => {});
};

export default registerUser;
