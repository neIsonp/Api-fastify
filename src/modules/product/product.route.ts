import { FastifyInstance } from "fastify";
import { createProductHandler } from "./product.controller";
import { $ref } from "../schemas";

export async function productRoutes(app: FastifyInstance) {
  app.post(
    "/",
    {
      schema: {
        body: $ref("createProductSchema"),
        response: { 201: $ref("productResponseSchema") },
      },
    },
    createProductHandler
  );
}
