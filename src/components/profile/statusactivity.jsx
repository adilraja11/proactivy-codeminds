import React from 'react'

export const StatusActivity = () => {
    return (
        <div className="max-w-7xl mx-auto mb-12 space-y-6 my-5 h-72">
            <div className='text-xl'>My Activity</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolor excepturi placeat. Eius excepturi ea optio velit commodi consectetur, mollitia magnam ut corrupti rerum facilis veritatis culpa alias? Totam, non.</p>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Send Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Approved</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Approved</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Rejected</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
