import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const productInput = {
  title: z.string(),
  price: z.number(),
  content: z.string(),
};

const productGenerated = {
  id: z.string().uuid(),
  createdAt: z.string(),
  updatedAt: z.string(),
};

export const createProductSchema = z.object({ ...productInput });
export const productResponseSchema = z.object({
  ...productInput,
  ...productGenerated,
});

export const productsRespondeSchema = z.array(createProductSchema);

export type CreateProductInput = z.infer<typeof createProductSchema>;

export const { schemas: productSchemas, $ref: $productRefs } = buildJsonSchemas(
  {
    createProductSchema,
    productResponseSchema,
    productsRespondeSchema,
  }
);
