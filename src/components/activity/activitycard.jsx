import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// { title, category, description, imgSrc, pricing, id }

export const ActivityCard = ({ id, title, slug, category, categoryId, description, featuredImage, images, pricing }) => {
    return (
        <div className="card bg-white shadow-xl text-black">
            <figure>
                <Image src="https://fakeimg.pl/440x320/" width={440} height={320} alt="Shoes" className="object-cover hover:scale-105 transition duration-300" />
            </figure>
            <div className="card-body">
                <p className="text-xs font-semibold text-primary">{category.name}</p>
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-primary badge-sm">{pricing}</div>
                </h2>
                <p>{description}</p>
                <Link href={`/${categoryId}/${slug}`}>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">See Details</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};