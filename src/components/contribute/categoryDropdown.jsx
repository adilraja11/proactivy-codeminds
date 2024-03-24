import React from "react";

export const CategoryDropdown = ({ data, onChange, value }) => {
  const handleChange = (e) => {
    const selectedCategoryId = e.target.value;

    onChange(selectedCategoryId);

  };

  const categories = data;

  return (
    <div>
      <select className="select select-bordered w-full" value={value} onChange={handleChange}>
        <option value="Select Category" key="Select Category">
          Select Category
        </option>
        {categories.map((data) => (
          <option key={data.id} value={data.id}>
            {data.name}
          </option>
        ))}
      </select>
    </div>
  );
};
