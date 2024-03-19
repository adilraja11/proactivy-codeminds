import React from 'react';

export const SearchBar = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="input input-bordered pl-10 w-full"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="absolute top-1/2 left-3 transform -translate-y-1/2 w-4 h-4 opacity-70"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">
                        Categories
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a>Item 1</a>
                        </li>
                        <li>
                            <a>Item 2</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
