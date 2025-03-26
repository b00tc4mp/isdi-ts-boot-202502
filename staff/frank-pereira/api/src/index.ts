import express, { json, Request, Response } from "express";
import "dotenv/config.js";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { CustomRequestBody, User, UserFromRequest } from "./types";
import "crypto";

const USERS_DB_PATH = path.join(process.cwd(), "src", "database", "users.json");

const api = express();

const PORT = process.env.PORT || 7500;

const jsonBodyParser = json();

api.get("/ping", (_req: Request, res: Response) => {
  res.json({ message: "pong 🏓" });
});

api.post(
  "/users",
  jsonBodyParser,
  (req: CustomRequestBody<UserFromRequest>, res: Response) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      res.status(400).json({ message: "invalid fields" });

      return;
    }

    return readFile(USERS_DB_PATH, "utf-8")
      .then((data) => JSON.parse(data) as User[])
      .then((users) => {
        const user = users.find((user) => user.username === username);

        if (user) {
          res.status(409).json({ message: "user already exists" });

          return;
        }

        const newUser: User = {
          id: crypto.randomUUID(),
          username,
          email,
          password,
        };

        users.push(newUser);

        writeFile(USERS_DB_PATH, JSON.stringify(users, null, 2)).then(() =>
          res.status(201).send()
        );
      });
  }
);

api.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
