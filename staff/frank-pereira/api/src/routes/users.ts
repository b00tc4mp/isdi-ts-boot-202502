import { Router } from "express";
import validationHandler from "../middlewares/validationHandler.js";
import {
  registerUserSchema,
  userAuthSchema,
} from "../data/schemas/zodSchemas.js";
import registerUserHandler from "../handlers/registerUserHandler.js";
import jsonBodyParser from "../middlewares/jsonBodyParser.js";
import authenticateUserHandler from "../handlers/authenticateUserHandler.js";
import { authHandler } from "../middlewares/authHandler.js";

export const userRouter = Router();

userRouter.get("/self/username", authHandler, getUserUsernameHandler);

userRouter.post(
  "/users",
  jsonBodyParser,
  validationHandler(registerUserSchema),
  registerUserHandler
);

userRouter.post(
  "/auth",
  jsonBodyParser,
  validationHandler(userAuthSchema),
  authenticateUserHandler
);
