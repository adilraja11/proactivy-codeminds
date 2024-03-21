import Link from 'next/link'
import React from 'react'

export const TableRequest = () => {
  return (
    <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th>Activity Title</th>
                <th>Contributor Name</th>
                <th>Status</th>
                <th>Create Date</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {/* row 1 */}
            <tr>
                <td>Belajar Bahasa Inggris</td>
                <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10 bg-slate-500">
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">harthagerty@test.com</div>
                    </div>
                </div>
                </td>
                <td>
                <span className="badge badge-error badge-sm">Rejected</span>
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
                <td>Belajar Bahasa Mandarin</td>
                <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10 bg-slate-500">
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">harthagerty@test.com</div>
                    </div>
                </div>
                </td>
                <td>
                <span className="badge badge-success badge-sm">Approved</span>
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
