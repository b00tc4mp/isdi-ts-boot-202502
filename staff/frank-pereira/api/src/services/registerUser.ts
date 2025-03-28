import { data } from "../data/index.js";
import validate from "../validations.js";
import errors from "../errors/index.js";
import { User } from "../types.js";

const { DuplicityError, SystemError } = errors;

const registerUser = (
  username: string,
  email: string,
  password: string
): Promise<void> => {
  validate.username(username);
  validate.email(email);
  validate.password(password);

  return data
    .loadCollection<User>("users")
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((users) => {
      const user = users.find((user) => user.username === username);

      if (user) {
        throw new DuplicityError("user already exists");
      }

      const newUser: User = {
        id: crypto.randomUUID(),
        username,
        email,
        password,
      };

      users.push(newUser);

      return data.saveCollection<User>("users", users).catch((error) => {
        throw new SystemError(error.message);
      });
    });
};

export default registerUser;
