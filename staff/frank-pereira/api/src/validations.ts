import errors from "./errors/index.js";

const { ValidationError } = errors;

const validateUsername = (username: string) => {
  if (typeof username !== "string") {
    throw new ValidationError("invalid username");
  }
};

const validateEmail = (email: string) => {
  if (typeof email !== "string") {
    throw new ValidationError("invalid email");
  }

  if (
    !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      email
    )
  ) {
    throw new ValidationError("invalid email");
  }
};

const validatePassword = (password: string) => {
  if (typeof password !== "string") {
    throw new ValidationError("invalid password");
  }

  if (password.length < 8) {
    throw new ValidationError("invalid password length");
  }
};

const validateId = (userId: string) => {
  if (typeof userId !== "string") {
    throw new ValidationError("invalid user id");
  }

  if (userId.length !== 24) {
    throw new ValidationError("invalid user id length");
  }
};

const validate = {
  username: validateUsername,
  email: validateEmail,
  password: validatePassword,
  id: validateId,
};

export default validate;
