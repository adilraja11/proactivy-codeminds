"use client"

import React from 'react'

export const CategoryDropdown = ({ data, onChange, categoryId}) => {
  console.log(categoryId)

  const handleChange = (e) => {
    onChange(e.target.value);
  }

  const categories = data;

  return (
    <div>
      <select className="select select-bordered w-full" defaultValue={categoryId} onChange={handleChange} >
        <option value="">Select Category</option>
        {categories.map((data) => (
          <option key={data.id} value={data.id}>
            {data.name}
          </option>
        ))}
      </select>
    </div>
  );
}
