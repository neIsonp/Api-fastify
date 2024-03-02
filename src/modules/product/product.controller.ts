import { FastifyReply, FastifyRequest } from "fastify";
import { CreateProductInput } from "./product.schema";
import { createProduct, getProducts } from "./product.service";
import { getUserByToken } from "../../utils/get-user-by-token";

export async function createProductHandler(
  req: FastifyRequest<{ Body: CreateProductInput }>,
  res: FastifyReply
) {
  const user: any = getUserByToken(req.headers.authorization!);

  console.log(user);

  const product = await createProduct({
    ...req.body,
    ownerId: user.id,
  });

  return product;
}

export async function getProductsHandler() {
  const products = await getProducts();

  return products;
}
