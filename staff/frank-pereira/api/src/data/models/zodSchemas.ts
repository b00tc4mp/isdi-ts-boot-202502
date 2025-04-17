import { object, z } from "zod";

export const registerUserSchema = object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(25, "Password cannot pass from 25 characters"),
});

export const userAuthSchema = object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(25, "Password cannot pass from 25 characters"),
});

export const createPostSchema = object({
  description: z
    .string()
    .min(3, "Description must be at least 3 characters long"),
  image: z.string(),
});

export type RegisterUserInput = z.infer<typeof registerUserSchema>;
