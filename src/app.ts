import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import { userRoutes } from "./modules/user/user.route";
import { userSchemas } from "./modules/user/user.schema";
import fjwt from "@fastify/jwt";

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

for (const schema of userSchemas) {
  app.addSchema(schema);
}

app.register(userRoutes, { prefix: "api/users" });

app.listen({ port: 3000 }).then(() => {
  console.log("Server ready!");
});
