import Link from 'next/link'
import React from 'react'

export const TableRequest = ({allResourceData}) => {
  return (
    <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th>Activity</th>
                <th>Status</th>
                <th>Update Data</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                {allResourceData.map(({id, title, slug, pricing, isApproved, updatedAt}) => {
                    return (
                        <tr key={id}>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div>
                                    <div className="font-bold">{title}</div>
                                    <div className="text-sm opacity-50">{pricing}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {isApproved? <span className="badge badge-success badge-sm">Approved</span> : <span className="badge badge-error badge-sm">Not Approved</span>}
                            </td>
                            <td>{updatedAt}</td>
                            <th className='flex space-x-2'>
                                <Link className='block' href={`/dashboard/edit/${slug}`}>
                                    <button className="btn btn-info btn-xs">Details</button>
                                </Link>
                                <div className='block'>
                                    <button className="btn btn-warning btn-xs">Delete</button>
                                </div>
                            </th>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
  )
}
