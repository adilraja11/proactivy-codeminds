import { Appbar } from "@/components/navigation/appbar";
import React from "react";
import { cookies } from "next/headers";
import * as jose from "jose";

export default async function Layout({ children }) {
  let isLoggedIn = false;
  const cookieStore = cookies();

  // logic untuk cek token
  const jwtSecret = process.env.JWT_SECRET;
  const encodedJwtSecret = new TextEncoder().encode(jwtSecret);
  const token = cookieStore.get("token")?.value;
  console.log(token);

  try {
    await jose.jwtVerify(token, encodedJwtSecret);
    isLoggedIn = true;
  } catch (_) {
    isLoggedIn = false;
  }

  return (
    <div>
      <Appbar isLoggedIn={isLoggedIn} />
      <div>{children}</div>
    </div>
  );
}
