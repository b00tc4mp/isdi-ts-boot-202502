import { Request, Response } from "express";
import createFunctionalHandler from "../middlewares/createFunctionalHandler.js";
import service from "../services/index.js";
import { AuthHandlerRequestType } from "../middlewares/types.js";

const getPostsHandler = createFunctionalHandler(
  (req: Request, res: Response) => {
    const { userId } = req as AuthHandlerRequestType;

    return service.getPosts(userId).then((posts) => {
      res.json(posts);
    });
  }
);

export default getPostsHandler;
