import { Request, Response } from "express";
import createFunctionalHandler from "../middlewares/createFunctionalHandler.js";
import { AuthHandlerRequestType } from "../middlewares/types.js";
import service from "../services/index.js";

const getUserUsernameHandler = createFunctionalHandler(
  (req: Request, res: Response) => {
    const { userId } = req as AuthHandlerRequestType;

    return service.getUserUsername(userId).then((username) => {
      res.json({ username });
    });
  }
);

export default getUserUsernameHandler;
