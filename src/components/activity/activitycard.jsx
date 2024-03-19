import Image from 'next/image';
import React from 'react';

export const ActivityCard = () => {
    return (
        <div className="card bg-white shadow-xl text-black">
            <figure>
                <Image src="https://fakeimg.pl/440x320/" width={440} height={320} alt="Shoes" className="object-cover hover:scale-105 transition duration-300" />
            </figure>
            <div className="card-body">
                <p className="text-xs font-semibold text-primary">Category</p>
                <h2 className="card-title">
                    Lorem
                    <div className="badge badge-primary badge-sm">FREE</div>
                </h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">See Details</button>
                </div>
            </div>
        </div>
    );
};
