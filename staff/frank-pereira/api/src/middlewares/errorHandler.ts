import { Request, Response, NextFunction } from "express";

import { StatusCode } from "./types.js";
import errors from "../errors/index.js";
import loggers from "../logs/index.js";
import { ZodError } from "zod";
const { logger } = loggers;

const isZodError = (error: Error): error is ZodError =>
  error instanceof ZodError;

const parsedError = (error: Error) => {
  if (isZodError(error)) {
    return {
      name: ValidationError.name,
      message: error.errors.map((error) => error.message).join(", "),
    };
  }
};

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
    case error instanceof ZodError:
      status = 400;
      break;
    case error instanceof NotFoundError:
      status = 404;
      break;
    case error instanceof ValidationError:
      status = 400;
      break;
    case error instanceof CredentialsError ||
      error instanceof AuthorizationError:
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
    error:
      status === 500
        ? SystemError.name
        : isZodError(error)
        ? parsedError(error)?.name
        : error.constructor.name,
    message: isZodError(error) ? parsedError(error)?.message : error.message,
  });

  logger.error(error);
};

export default errorHandler;
