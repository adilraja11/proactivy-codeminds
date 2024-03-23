import Link from "next/link";
import React from "react";
import { cookies } from "next/headers";
import * as jose from "jose";

export const Appbar = async () => {
  let isLoggedIn = false;

  // logic untuk cek token
  // const jwtSecret = process.env.JWT_SECRET;
  // const encodedJwtSecret = new TextEncoder().encode(jwtSecret);
  const token = cookies().get("token")?.value;

  console.log(token);

  // try {
  //   await jose.jwtVerify(token, encodedJwtSecret);
  //   isLoggedIn = true;
  // } catch (_) {
  //   isLoggedIn = false;
  // }
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          ProActivity
        </Link>
      </div>
      <div className="flex-none space-x-2">
        {isLoggedIn ? (
          <details className="dropdown dropdown-end">
            <summary className="avatar">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                <Link href={`/profile`}>My Status</Link>
              </li>
              <li>
                <Link href={`/`}>Log Out</Link>
              </li>
            </ul>
          </details>
          ) : (
            <div>
              <Link href="/login">
                <button className="btn">Login</button>
              </Link>
              <Link href="/register">
                <button className="btn">Sign Up</button>
              </Link>
            </div>
          )}
      </div>
    </div>
  );
};
