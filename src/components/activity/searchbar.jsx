"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Perhatikan penggunaan next/navigation di sini
import { Search } from 'lucide-react';

export const SearchBar = () => {
    const [query, setQuery] = useState("");
    const router = useRouter();

    function handleSearch(e) {
        setQuery(e.target.value);
    }

    async function handlePushSearch(event) {
        if (event.code === "Enter") {
            router.push(`/activity?search=${query}`);
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="text-gray-500" />
                    </div>
                    <input type="text" placeholder="Search..." value={query} onChange={handleSearch} onKeyUp={handlePushSearch} className="input-bordered pl-10 w-full md:w-[55rem] lg:w-[72rem] xl:w-120" />
                </div>
            </div>
        </div>
    );
};
