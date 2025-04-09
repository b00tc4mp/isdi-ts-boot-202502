import "dotenv/config.js";
import express, { Request, Response } from "express";

import errorHandler from "./middlewares/errorHandler.js";
import loggers from "./logs/index.js";

import { data } from "./data/index.js";

import { userRouter } from "./routes/users.js";

const { morganMiddleware } = loggers;

const { MONGO_URI, MONGO_DB_NAME } = process.env;

data
  .connect(MONGO_URI!, MONGO_DB_NAME!)
  .then(() => {
    const api = express();

    api.disable("x-powered-by");

    const PORT = process.env.PORT || 7500;

    api.use(morganMiddleware);

    api.use("/users", userRouter);

    api.get("/ping", (_req: Request, res: Response) => {
      res.json({ message: "pong 🏓" });
    });

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
