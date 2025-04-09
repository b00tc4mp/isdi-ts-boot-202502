import { Response } from "express";
import createFunctionalHandler from "../middlewares/createFunctionalHandler.js";
import { CustomRequestBody } from "../types.js";
import service from "../services/index.js";

type AuthUserData = {
  email: string;
  password: string;
};

const authenticateUserHandler = createFunctionalHandler<AuthUserData>(
  (req: CustomRequestBody<AuthUserData>, res: Response) => {
    const { email, password } = req.body;

    return service.authenticateUser(email, password).then((userId) => {
      res.json(userId);
    });
  }
);

export default authenticateUserHandler;
