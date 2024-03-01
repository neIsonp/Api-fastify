import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const productInput = {
  title: z.string(),
  price: z.string(),
  content: z.string(),
};

const productGenerated = {
  id: z.string().uuid(),
  createdAt: z.string(),
  updatedAt: z.string(),
};

const createProductSchema = z.object({ ...productInput });
const productResponseSchema = z.object({
  ...productInput,
  ...productGenerated,
});

const productsRespondeSchema = z.array(createProductSchema);

export type CreateProductInput = z.infer<typeof createProductSchema>;

export const { schemas: productSchemas, $ref } = buildJsonSchemas({
  createProductSchema,
  productResponseSchema,
  productsRespondeSchema,
});
