import { buildJsonSchemas } from "fastify-zod";
import {
  createUserResponseSchema,
  createUserSchema,
  loginResponseSchema,
  loginSchema,
  userListSchemaResponse,
} from "./user/user.schema";

import {
  createProductSchema,
  productResponseSchema,
  productsResponseSchema,
} from "./product/product.schema";

export const { schemas, $ref } = buildJsonSchemas({
  createUserSchema,
  createUserResponseSchema,
  loginSchema,
  loginResponseSchema,
  userListSchemaResponse,
  createProductSchema,
  productResponseSchema,
  productsResponseSchema,
});
