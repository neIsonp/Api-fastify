import crypto from "crypto";

export function hashPassword(password: string) {
  const salt = crypto.randomBytes(16).toString("hex");

  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512");

  return { hash, salt };
}

export function verifyPassword() {}
