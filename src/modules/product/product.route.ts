import { FastifyInstance } from "fastify";
import { createProductHandler, getProductsHandler } from "./product.controller";
import { $ref } from "../schemas";

export async function productRoutes(app: FastifyInstance) {
  app.post(
    "/",
    {
      preHandler: [app.authenticate],
      schema: {
        body: $ref("createProductSchema"),
        response: { 201: $ref("productResponseSchema") },
      },
    },
    createProductHandler
  );

  app.get("/", getProductsHandler);
}
