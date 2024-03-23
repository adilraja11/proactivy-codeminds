import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// { title, category, description, imgSrc, pricing, id }

export const ActivityCard = ({ id, title, slug, category, categoryId, description, featuredImage, images, pricing }) => {
    return (
        <div className="card bg-white shadow-xl text-black flex flex-col justify-between">
            <div className="card-body">
                <div>
                    <p className="text-xs font-semibold text-primary">{category.name}</p>
                </div>
                <div className="flex items-center gap-2">
                    <h2 className="card-title">{title}</h2>
                    {pricing == "FREE"? <div className="badge badge-success badge-sm">{pricing}</div> : <div className="badge badge-error badge-sm">{pricing}</div>}
                </div>

                <div>
                    <p className="line-clamp-3">{description}</p>
                </div>
                
            </div>
            <div className="m-4">
                <Link href={`/${categoryId}/${slug}`}>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">See Details</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};