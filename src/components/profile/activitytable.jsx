import React from 'react'

export const ActivityTable = ({userData}) => {
    return (
        <div className="max-w-7xl mx-auto mb-12 space-y-3">
            <div className='text-xl font-bold'>My Activity</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolor excepturi placeat. Eius excepturi ea optio velit commodi consectetur, mollitia magnam ut corrupti rerum facilis veritatis culpa alias? Totam, non.</p>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Created At</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.resource.map((resource) => {
                            return (
                                <tr>
                                    <th>{resource.title}</th>
                                    <td>{resource.createdAt.toString()}</td>
                                    <td>{resource.isApproved? "Approved" : "Not Approved"}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}