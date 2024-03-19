import React from 'react'

export const ContributionTable = () => {
  return (
    <div>
        <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th>Activity Name</th>
                <th>Send Date</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            {/* row 1 */}
            <tr className="hover">
                <td>Coursera</td>
                <td>11:04 PM 03/13/2024</td>
                <td>Approved</td>
            </tr>
            {/* row 3 */}
            <tr className="hover">
                <td>Figma For Education</td>
                <td>11:59 PM 03/13/2024</td>
                <td>Rejected</td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
  )
}
