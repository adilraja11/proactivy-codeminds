"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { API_URL } from "@/config/apiUrl";

export const Appbar = ({ isLoggedIn }) => {
  const router = useRouter();

  function handleLogout() {
    document.cookie = "token=; Path=/; Max-Age=0";
    router.push("/");
    window.location.replace(API_URL);
  }
  return (
    <div className="navbar bg-base-100 px-20 py-5">
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
                  <Image alt="avatar" width={100} height={100} src={`https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg`} />
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
              <button className="btn-outline w-28 btn-neutral hover:btn-warning">Login</button>
            </Link>
            <Link href="/register">
              <button className="btn w-28 btn-primary">Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
