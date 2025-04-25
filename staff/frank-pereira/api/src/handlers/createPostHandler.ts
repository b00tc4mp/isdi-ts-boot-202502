import { Request, Response } from "express";
import createFunctionalHandler from "../middlewares/createFunctionalHandler.js";
import service from "../services/index.js";
import { AuthHandlerRequestType } from "../middlewares/types.js";

const createPostHandler = createFunctionalHandler(
  (req: Request, res: Response) => {
    const { userId } = req as AuthHandlerRequestType;

    const { description, image } = req.body;

    return service.createPost(userId, description, image).then(() => {
      res.status(201).send();
    });
  }
);

export default createPostHandler;
