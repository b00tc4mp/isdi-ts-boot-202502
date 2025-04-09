import { User } from "../data/schemas/index.js";
import validate from "../validations.js";
import errors from "../errors/index.js";
const { SystemError, NotFoundError } = errors;

const getUserUsername = (userId: string): Promise<string> => {
  validate.id(userId);

  return (async () => {
    let user;

    try {
      user = await User.findById(userId).lean();

      if (!user) throw new NotFoundError("user not found");
    } catch (error) {
      throw new SystemError((error as Error).message);
    }

    return user.username;
  })();
};

export default getUserUsername;
