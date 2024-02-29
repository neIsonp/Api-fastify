import Fastify from "fastify";
import { userRoutes } from "./modules/user/user.route";
import { userSchemas } from "./modules/user/user.schema";

const app = Fastify();

app.get("/healthcheck", (req, res) => {
  res.send("UP");
});

for (const schema of userSchemas) {
  app.addSchema(schema);
}

app.register(userRoutes, { prefix: "api/users" });

app.listen({ port: 3000 }).then(() => {
  console.log("Server ready!");
});
