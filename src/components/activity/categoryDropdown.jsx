"use client"

import React from 'react'

export const CategoryDropdown = ({ data, onChange, categoryId}) => {
  console.log(categoryId)

  const handleChange = (e) => {
    onChange(e.target.value);
  }

  const categories = data;

  return (
    <div className=''>
      <select className="select select-primary w-full" defaultValue={categoryId} onChange={handleChange} >
        <option value="">All Category</option>
        {categories.map((data) => (
          <option key={data.id} value={data.id}>
            {data.name}
          </option>
        ))}
      </select>
    </div>
  );
}
