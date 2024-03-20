import React from 'react'
import Link from 'next/link'

export const TableMaster = () => {
  return (
    <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th>Activity Title</th>
                <th>Category</th>
                <th>Pricing</th>
                <th>Create Date</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {/* row 1 */}
            <tr>
                <td>Belajar Inggris</td>
                <td>SMA</td>
                <td>
                <span className="badge badge-success badge-sm">FREE</span>
                </td>
                <td>11:54 PM 03/13/2024</td>
                <th>
                <Link className='block' href="/dashboard/edit">
                    <button className="btn btn-link btn-xs">Details</button>
                 </Link>
                </th>
            </tr>
            {/* row 2 */}
            <tr>
                <td>Belajar Mandarin</td>
                <td>SMA</td>
                <td>
                <span className="badge badge-warning badge-sm">PAID</span>
                </td>
                <td>11:54 PM 03/13/2024</td>
                <th>
                <Link className='block' href="/dashboard/edit">
                    <button className="btn btn-link btn-xs">Details</button>
                 </Link>
                </th>
            </tr>
            </tbody>
        </table>
    </div>
  )
}
