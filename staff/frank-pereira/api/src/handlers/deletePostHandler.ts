import { Request, Response } from "express";
import createFunctionalHandler from "../middlewares/createFunctionalHandler.js";
import { AuthHandlerRequestType } from "../middlewares/types.js";
import service from "../services/index.js";

const deletePostHandler = createFunctionalHandler(
  (req: Request, res: Response) => {
    const {
      userId,
      params: { postId },
    } = req as AuthHandlerRequestType;

    return service.deletePost(userId, postId).then(() => {
      res.status(204).send();
    });
  }
);

export default deletePostHandler;
