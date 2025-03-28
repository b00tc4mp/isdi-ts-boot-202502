import { Request, Response, NextFunction } from "express";

import { StatusCode } from "./types.js";
import errors from "../errors/index.js";
const {
  CredentialsError,
  DuplicityError,
  NotFoundError,
  OwnershipError,
  SystemError,
  ValidationError,
  AuthorizationError,
} = errors;

const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  let status: StatusCode = 500;

  switch (true) {
    case error instanceof NotFoundError:
      status = 404;
      break;
    case error instanceof ValidationError:
      status = 400;
      break;
    case error instanceof CredentialsError || AuthorizationError:
      status = 401;
      break;
    case error instanceof OwnershipError:
      status = 403;
      break;
    case error instanceof DuplicityError:
      status = 409;
      break;
  }

  res.status(status).json({
    error: status === 500 ? SystemError.name : error.constructor.name,
    message: error.message,
  });
};

export default errorHandler;
