import React from 'react'

export const AppbarV2 = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">ProActivity</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Login</a></li>
      <li>
        <a>Sign Up</a>
      </li>
    </ul>
  </div>
</div>
  )
}
