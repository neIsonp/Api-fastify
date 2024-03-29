import { FastifyInstance } from "fastify";
import {
  getUsersHandler,
  loginHander,
  registerUserHandler,
} from "./user.controller";
import { $ref } from "../schemas";

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

  app.post(
    "/login",
    {
      schema: {
        body: $ref("loginSchema"),
        response: { 201: $ref("loginResponseSchema") },
      },
    },
    loginHander
  );

  app.get(
    "/",
    {
      preHandler: [app.authenticate],
      schema: {
        response: { 200: $ref("userListSchemaResponse") },
      },
    },
    getUsersHandler
  );
}
