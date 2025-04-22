import { Request, Response, NextFunction } from "express";

import { StatusCode } from "./types.js";
import errors from "../errors/index.js";
import loggers from "../logs/index.js";
import { ZodError } from "zod";
const { logger } = loggers;

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
  let errorName = SystemError.name;
  let { message } = error;

  switch (true) {
    case error instanceof ZodError:
      status = 400;
      errorName = NotFoundError.name;
      message = error.errors.map((error) => error.message).join(", ");
      break;
    case error instanceof NotFoundError:
      status = 404;
      errorName = error.constructor.name;
      break;
    case error instanceof ValidationError:
      status = 400;
      errorName = error.constructor.name;
      break;
    case error instanceof CredentialsError ||
      error instanceof AuthorizationError:
      status = 401;
      errorName = error.constructor.name;
      break;
    case error instanceof OwnershipError:
      status = 403;
      errorName = error.constructor.name;
      break;
    case error instanceof DuplicityError:
      status = 409;
      errorName = error.constructor.name;
      break;
  }

  res.status(status).json({ error: errorName, message });

  logger.error(error);
};

export default errorHandler;
