import "dotenv/config.js";
import express, { json, Request, Response } from "express";
import registerUserHandler from "./handlers/registerUserHandler.js";
import errorHandler from "./middlewares/errorHandler.js";
import loggers from "./logs/index.js";
import validationHandler from "./middlewares/validationHandler.js";
import {
  registerUserSchema,
  userAuthSchema,
} from "./data/schemas/zodSchemas.js";
import { data } from "./data/index.js";
import authenticateUserHandler from "./handlers/authenticateUserHandler.js";

const { morganMiddleware } = loggers;

const { MONGO_URI, MONGO_DB_NAME } = process.env;

data
  .connect(MONGO_URI!, MONGO_DB_NAME!)
  .then(() => {
    const api = express();

    api.disable("x-powered-by");

    const PORT = process.env.PORT || 7500;

    api.use(morganMiddleware);

    const jsonBodyParser = json();

    api.get("/ping", (_req: Request, res: Response) => {
      res.json({ message: "pong 🏓" });
    });

    api.post(
      "/users",
      jsonBodyParser,
      validationHandler(registerUserSchema),
      registerUserHandler
    );

    api.post(
      "/users/auth",
      jsonBodyParser,
      validationHandler(userAuthSchema),
      authenticateUserHandler
    );

    api.use(errorHandler);

    api.listen(PORT, () =>
      console.log(`Listening on http://localhost:${PORT}`)
    );
  })
  .catch((error) => {
    process.on("exit", () => {
      console.error(error.message);

      process.exit(1);
    });
  });
