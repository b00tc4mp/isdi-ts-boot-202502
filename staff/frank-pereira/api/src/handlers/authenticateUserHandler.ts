import "dotenv/config.js";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import createFunctionalHandler from "../middlewares/createFunctionalHandler.js";
import service from "../services/index.js";

const authenticateUserHandler = createFunctionalHandler(
  (req: Request, res: Response) => {
    const { email, password } = req.body;

    return service.authenticateUser(email, password).then((id) => {
      const token = jwt.sign({ sub: id }, process.env.JWT_SECRET!);

      res.json(token);
    });
  }
);

export default authenticateUserHandler;
