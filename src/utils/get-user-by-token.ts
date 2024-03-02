import { app } from "../app";

export function getUserByToken(auth: string) {
  const token = auth.split(" ")[1];

  return app.jwt.verify(token);
}
