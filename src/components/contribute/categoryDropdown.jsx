import React from 'react'

export const CategoryDropdown = ({ data, onChange, onChangeCategoryName, value}) => {
  const handleChange = (e) => {
    const selectedCategoryId = e.target.value;

    onChange(selectedCategoryId);

    const selectedCategory = categories.find(category => category.id === selectedCategoryId);

    const selectedCategoryName = selectedCategory ? selectedCategory.name : '';

    onChangeCategoryName(selectedCategoryName);
  }

  const categories = data;

  return (
    <div>
      <select
        className="select select-bordered w-full" value={value}
        onChange={handleChange}
      >
        <option disabled value="Select Category">Select Category</option>
        {categories.map((data) => (
          <option key={data.id} value={data.id}>
            {data.name}
          </option>
        ))}
      </select>
    </div>
  );
}
