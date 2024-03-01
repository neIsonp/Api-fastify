export {};

declare module "fastify" {
  interface FastifyInstance {
    authenticate: any;
  }
}
