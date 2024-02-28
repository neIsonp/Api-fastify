import { FastifyInstance } from "fastify";
import { registerUserHandler } from "./user.controller";

export async function userRoutes(app: FastifyInstance) {
  app.post("/", registerUserHandler);
}
