import { FastifyReply, FastifyRequest } from "fastify";
import { CreateProductInput } from "./product.schema";
import { createProduct } from "./product.service";

export async function createProductHandler(
  req: FastifyRequest<{ Body: CreateProductInput }>,
  res: FastifyReply
) {
  const product = await createProduct({
    ...req.body,
    ownerId: req.user.id,
  });
}
