import bcrypt from "bcryptjs";
import { User } from "../data/schemas/index.js";
import validate from "../validations.js";

import errors from "../errors/index.js";

const { NotFoundError, CredentialsError, SystemError } = errors;

const authenticateUser = (email: string, password: string): Promise<string> => {
  validate.email(email);
  validate.password(password);

  return (async () => {
    let user;
    let isPasswordMatched;

    try {
      user = await User.findOne({ email }).lean();

      if (!user) {
        throw new NotFoundError("user not found");
      }
    } catch (error) {
      throw new SystemError((error as Error).message);
    }

    try {
      isPasswordMatched = await bcrypt.compare(password, user.password);

      if (!isPasswordMatched) throw new CredentialsError("wrong credentials");
    } catch (error) {
      throw new SystemError((error as Error).message);
    }

    return user._id.toString();
  })();
};

export default authenticateUser;
