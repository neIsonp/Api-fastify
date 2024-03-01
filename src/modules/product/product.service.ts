import { prisma } from "../../utils/prisma";
import { CreateProductInput } from "./product.schema";

export async function createProduct(
  data: CreateProductInput & { ownerId: string }
) {
  return prisma.product.create({
    data,
  });
}

async function getProducts() {
  return prisma.product.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      price: true,
      owner: {
        select: {
          name: true,
          id: true,
        },
      },
    },
  });
}
