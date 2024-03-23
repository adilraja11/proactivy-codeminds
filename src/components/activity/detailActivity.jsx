"use client";

import React from "react";

export const DetailActivity = ({ detailResource }) => {
  return (
    <div className="flex items-center">
      <div className="flex space-x-12 items-center">
        <div className="space-y-2">
          <h1 className="text-5xl font-bold">{detailResource.title}</h1>
          <div className="space-x-2">
            <div className="badge badge-secondary badge-sm">{detailResource.category.name}</div>
            {detailResource.pricing == "FREE"? <div className="badge badge-success badge-sm">{detailResource.pricing}</div> : <div className="badge badge-error badge-sm">{detailResource.pricing}</div>}
          </div>
          <p className="text-lg">{detailResource.description}</p>
          <a target="_blank" className="block" href={detailResource.linkUrl}>
            <button className="btn btn-info btn-md">Go to Resource</button>
          </a>
        </div>
      </div>
    </div>
  );
};
