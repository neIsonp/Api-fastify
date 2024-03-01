import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUserInput, LoginInput } from "./user.schema";
import { createUser, findUserByEmail, findUsers } from "./user.service";
import { verifyPassword } from "../../utils/hash";
import { app } from "../../app";

export async function registerUserHandler(
  req: FastifyRequest<{
    Body: CreateUserInput;
  }>,
  res: FastifyReply
) {
  const body = req.body;

  try {
    const user = await createUser(body);

    return res.code(201).send(user);
  } catch (error) {
    console.log(error);

    return res.code(500).send(error);
  }
}

export async function loginHander(
  req: FastifyRequest<{ Body: LoginInput }>,
  res: FastifyReply
) {
  const { email, password } = req.body;

  const user = await findUserByEmail(email);

  if (!user) {
    res.code(401).send({ message: "Invalid email or password" });
  }

  const correctPassword = verifyPassword({
    candidatePassword: password,
    salt: user!.salt,
    hash: user!.password,
  });

  if (!correctPassword) {
    return res.code(401).send({ message: "Invalid email or password" });
  }

  const { password: pass, salt, ...rest } = user!;

  console.log(rest);

  return { accessToken: app.jwt.sign(rest) };
}

export async function getUsersHandler(req: FastifyRequest, res: FastifyReply) {
  const users = await findUsers();

  return users;
}
