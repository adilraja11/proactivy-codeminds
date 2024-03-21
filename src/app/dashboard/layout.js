"use client"

import React from 'react'
import Link from 'next/link'

export default function Layout({children}) {
  return (
    <div className="w-full h-screen py-10">
      <main className="max-w-7xl m-auto space-y-6">
        <div className="flex gap-8">
          <aside className=" w-64 flex flex-col justify-between gap-20">
            <div>
              <Link className="block" href="/dashboard">
                <div className="flex gap-2 items-center hover:bg-primary/5 p-2 font-medium cursor-pointer rounded-xl transition duration-200 ease-in-out">
                  {/* <BarChart2 size={18} /> */}
                  <p>Dashboard</p>
                </div>
              </Link>
              <Link className="block" href="/dashboard/request">
                <div className="flex gap-2 items-center hover:bg-primary/5 p-2 font-medium cursor-pointer rounded-xl transition duration-200 ease-in-out">
                  {/* <BoxIcon size={18} /> */}
                  <p>Request Data</p>
                </div>
              </Link>
              <Link className="block" href="/dashboard/master">
                <div className="flex gap-2 items-center hover:bg-primary/5 p-2 font-medium cursor-pointer rounded-xl transition duration-200 ease-in-out">
                  {/* <ReceiptText size={18} /> */}
                  <p>Master Data</p>
                </div>
              </Link>
            </div>
            <Link className="block" href="/">
              <div className="flex gap-2 items-center hover:bg-primary/5 p-2 font-medium cursor-pointer rounded-xl transition duration-200 ease-in-out">
                {/* <ArrowLeft size={18} /> */}
                <p>Back to Home</p>
              </div>
            </Link>
          </aside>
          <section className="w-[calc(100%-16rem)]">{children}</section>
        </div>
      </main>
    </div>
  )
}
