import { app } from "../app";
import { userSchema } from "../modules/user/user.schema";

export function getUserByToken(auth: string) {
  const token = auth.split(" ")[1];

  return app.jwt.verify(token);
}
