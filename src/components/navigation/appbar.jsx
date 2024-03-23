"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

export const Appbar = ({ isLoggedIn }) => {
  const router = useRouter();

  function handleLogout() {
    document.cookie = "token=; Path=/; Max-Age=0";
    router.push("/");
  }
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
                <div onClick={handleLogout}>Log Out</div>
              </li>
            </ul>
          </details>
        ) : (
          <div className="flex gap-2">
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
