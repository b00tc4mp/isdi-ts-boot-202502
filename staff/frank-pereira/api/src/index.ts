import "dotenv/config.js";
import express, { json, Request, Response } from "express";
import registerUserHandler from "./handlers/registerUserHandler.js";
import errorHandler from "./middlewares/errorHandler.js";
import loggers from "./logs/index.js";
const { morganMiddleware } = loggers;

const api = express();

const PORT = process.env.PORT || 7500;

api.use(morganMiddleware);

const jsonBodyParser = json();

api.get("/ping", (_req: Request, res: Response) => {
  res.json({ message: "pong 🏓" });
});

api.post("/users", jsonBodyParser, registerUserHandler);

api.use(errorHandler);

api.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
