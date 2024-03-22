
import React from 'react'
import Link from 'next/link'

export const Appbar = () => {
  return (
<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">ProActivity</a>
  </div>
  <div className="flex-none">
    <details class="dropdown dropdown-end">
    <summary class="avatar">
      <div className="avatar">
        <div className="w-14 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
    </summary>
    <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
      <li>
        <Link href={`/profile`}>My Status</Link>
      </li>
      <li>
        <Link href={`/`}>Log Out</Link>
      </li>
    </ul>
    </details>
  </div>
</div>
  )
}
