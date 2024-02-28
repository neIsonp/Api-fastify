import Fastify from "fastify";
import { userRoutes } from "./modules/user/user.route";

const app = Fastify();

app.get("/healthcheck", (req, res) => {
  res.send("UP");
});

app.register(userRoutes, { prefix: "api/users" });

app.listen({ port: 3000 }).then(() => {
  console.log("Server ready!");
});
