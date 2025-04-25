import jwt from "jsonwebtoken";
import { Response, NextFunction, Request } from "express";
import { AuthHandlerRequestType } from "./types.js";

const { JWT_SECRET } = process.env;

export const authHandler = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;

    const token = authorization!.slice(7);

    const { sub: userId } = jwt.verify(token, JWT_SECRET!);

    (req as AuthHandlerRequestType).userId = userId as string;

    next();
  } catch (error) {
    next(error);
  }
};
