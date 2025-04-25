import { Router } from "express";
import jsonBodyParser from "../middlewares/jsonBodyParser.js";
import validationHandler from "../middlewares/validationHandler.js";
import { createPostSchema } from "../data/models/zodSchemas.js";
import createPostHandler from "../handlers/createPostHandler.js";
import { authHandler } from "../middlewares/authHandler.js";
import getPostsHandler from "../handlers/getPostsHandler.js";
import deletePostHandler from "../handlers/deletePostHandler.js";
import togglePostLikeHandler from "../handlers/togglePostLikeHandler.js";

export const postRouter = Router();

postRouter.get("/", authHandler, getPostsHandler);

postRouter.post(
  "/",
  jsonBodyParser,
  validationHandler(createPostSchema),
  authHandler,
  createPostHandler
);

postRouter.delete("/:postId", authHandler, deletePostHandler);

postRouter.patch("/:postId/likes", authHandler, togglePostLikeHandler);
