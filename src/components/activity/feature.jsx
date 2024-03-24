import React from 'react';
import { SearchBar } from './searchbar';
import { Dropdown } from './dropdown';
import { CategoryDropdown } from './categoryDropdown';

export const MainComponent = ({categoryData, onChangeCategoryId, onChangeSearch, categoryId}) => {
    return (
        <div>
            <div className="flex justify-between items-center gap-4 mt-24">
                <SearchBar onChange={onChangeSearch}/>
                <CategoryDropdown data={categoryData} onChange={onChangeCategoryId} categoryId={categoryId}/>
            </div>
        </div>
    );
};