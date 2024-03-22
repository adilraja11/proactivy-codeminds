import React from 'react';
import { SearchBar } from './searchbar';
import { Dropdown } from './dropdown';

export const MainComponent = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <SearchBar />
                <Dropdown />
            </div>
        </div>
    );
};