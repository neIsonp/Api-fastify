import { CreateProductInput } from "./user.schema";

export async function createProduct(
  data: CreateProductInput & { ownerId: number }
) {}
