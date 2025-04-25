class NotFoundError extends Error {
  constructor(message: string) {
    super(message);

    this.name = "NotFoundError";
  }
}
class ValidationError extends Error {
  constructor(message: string) {
    super(message);

    this.name = "ValidationError";
  }
}
class SystemError extends Error {
  constructor(message: string) {
    super(message);

    this.name = "SystemError";
  }
}
class CredentialsError extends Error {
  constructor(message: string) {
    super(message);

    this.name = "CredentialsError";
  }
}
class DuplicityError extends Error {
  constructor(message: string) {
    super(message);

    this.name = "DuplicityError";
  }
}
class OwnershipError extends Error {
  constructor(message: string) {
    super(message);

    this.name = "OwnershipError";
  }
}

class AuthorizationError extends Error {
  constructor(message: string) {
    super(message);

    this.name = "AuthorizationError";
  }
}

const errors = {
  NotFoundError,
  ValidationError,
  SystemError,
  CredentialsError,
  DuplicityError,
  OwnershipError,
  AuthorizationError,
};

export default errors;
