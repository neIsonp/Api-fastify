import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import { userRoutes } from "./modules/user/user.route";
import fjwt from "@fastify/jwt";
import "./types";
import { schemas } from "./modules/schemas";
import { productRoutes } from "./modules/product/product.route";

export const app = Fastify();

app.get("/healthcheck", (req, res) => {
  res.send("UP");
});

app.register(fjwt, {
  secret: "supersecret",
});

app.decorate("authenticate", async (req: FastifyRequest, res: FastifyReply) => {
  try {
    await req.jwtVerify();
  } catch (error) {
    return res.send(error);
  }
});

for (const schema of schemas) {
  app.addSchema(schema);
}

app.register(userRoutes, { prefix: "api/users" });
app.register(productRoutes, { prefix: "api/products" });

app.listen({ port: 3000 }).then(() => {
  console.log("Server ready!");
});
