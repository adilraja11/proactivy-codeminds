"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [user, setUser] = useState(null);

  return (
    <div>
      <div className="w-full h-screen py-10">
        <main className="max-w-7xl m-auto space-y-6">
          <header className="w-full flex justify-between items-center">
            <div className="flex gap-2 items-center"></div>
          </header>
          <div className="flex">
            <aside className=" w-64 flex flex-col justify-between gap-80">
              <div>
                <Link className="block" href="/dashboard">
                  <div className="flex gap-2 items-center hover:bg-primary/5 p-2 font-medium cursor-pointer rounded-xl transition duration-200 ease-in-out">
                    <p>Item 1</p>
                  </div>
                </Link>
                <Link className="block" href="/dashboard">
                  <div className="flex gap-2 items-center hover:bg-primary/5 p-2 font-medium cursor-pointer rounded-xl transition duration-200 ease-in-out">
                    <p>Item 2</p>
                  </div>
                </Link>
                <Link className="block" href="/dashboard">
                  <div className="flex gap-2 items-center hover:bg-primary/5 p-2 font-medium cursor-pointer rounded-xl transition duration-200 ease-in-out">
                    <p>Item 3</p>
                  </div>
                </Link>
              </div>
              <Link className="block" href="/">
                <div className="flex gap-2 items-center hover:bg-primary/5 p-2 font-medium cursor-pointer rounded-xl transition duration-200 ease-in-out">
                  <p>Back to Home</p>
                </div>
              </Link>
            </aside>
            <section className="w-[calc(100%-16rem)]">{children}</section>
          </div>
        </main>
      </div>
    </div>
  );
}
