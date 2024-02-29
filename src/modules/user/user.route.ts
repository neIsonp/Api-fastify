import { FastifyInstance } from "fastify";
import { registerUserHandler } from "./user.controller";
import { $ref } from "./user.schema";

export async function userRoutes(app: FastifyInstance) {
  app.post(
    "/",
    {
      schema: {
        body: $ref("createUserSchema"),
        response: { 201: $ref("createUserResponseSchema") },
      },
    },
    registerUserHandler
  );
}
