import { Router } from "express";
import jsonBodyParser from "../middlewares/jsonBodyParser.js";
import validationHandler from "../middlewares/validationHandler.js";
import { createPostSchema } from "../data/models/zodSchemas.js";
import createPostHandler from "../handlers/createPostHandler.js";
import { authHandler } from "../middlewares/authHandler.js";
import getPostsHandler from "../handlers/getPostsHandler.js";

export const postRouter = Router();

postRouter.post(
  "/",
  jsonBodyParser,
  validationHandler(createPostSchema),
  authHandler,
  createPostHandler
);

postRouter.get("/", authHandler, getPostsHandler);
