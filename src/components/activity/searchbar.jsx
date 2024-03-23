"use client";

import { Search } from 'lucide-react';

export const SearchBar = ({onChange}) => {
    const handleChange = (e) => {
        onChange(e.target.value)
        
    }

    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="text-gray-500" />
                    </div>
                    <input type="text" placeholder="Search..." onChange={handleChange} className="input-bordered pl-10 w-full md:w-[55rem] lg:w-[72rem] xl:w-120" />
                </div>
            </div>
        </div>
    );
};