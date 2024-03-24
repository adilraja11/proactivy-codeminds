import React from "react";
import moment from "moment";

export const ActivityTable = ({ userData }) => {
  return (
    <div className="max-w-6xl mx-auto mt-28 space-y-4">
      <div className="space-y-3">
        <div className="text-3xl font-bold text-primary">Contribution Status</div>
        <p>
          Check whether your submissions status have been approved or are pending review by the admin.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th className="text-base text-black font-semibold">Name</th>
              <th className="text-base text-black font-semibold">Created At</th>
              <th className="text-base text-black font-semibold">Update At</th>
            </tr>
          </thead>
          <tbody>
            {userData.resource.map((resource) => {
              return (
                <tr key={resource.id}>
                  <th>{resource.title}</th>
                  <td>{moment(resource.createdAt).format("MMMM Do YYYY: h:mm:ss A")}</td>
                  <td>{moment(resource.updatedAt).format("MMMM Do YYYY: h:mm:ss A")}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
