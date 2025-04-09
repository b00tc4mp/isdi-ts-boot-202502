import { NextFunction, Response } from "express";
import { AsyncHandler } from "./types.js";
import { CustomRequestBody } from "../types.js";

const createFunctionalHandler = <T>(handler: AsyncHandler<T>) => {
  return (req: CustomRequestBody<T>, res: Response, next: NextFunction) => {
    return handler(req, res).catch(next);
  };
};

export default createFunctionalHandler;
