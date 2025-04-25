import { NextFunction, Request, Response } from "express";
import { AsyncHandler } from "./types.js";

const createFunctionalHandler = (handler: AsyncHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    return handler(req, res).catch(next);
  };
};

export default createFunctionalHandler;
