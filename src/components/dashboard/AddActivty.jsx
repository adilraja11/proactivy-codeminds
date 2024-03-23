"use client"

import React from 'react'
import { API_URL } from "@/config/apiUrl";

// ${API_URL}
export const AddActivity = ({categoryData}) => {
    async function handleSubmitActivity(formData) {
        // const user = localStorage.getItem("user");
        // const userId = JSON.parse(user);
        formData.append("userId", "clu2d2tnl00006gld2qigk8ki");
        
        const response = await fetch(`/api/v2/resources`, {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        console.log(data);
    }
  return (
    <div className="space-y-2">
            <form action={handleSubmitActivity} className='space-y-6'>
                <div>
                    <div className="col-span-4">
                        <p className="font-bold">Activity Name</p>
                        <input type="text" name='title' placeholder="Type here" className="input input-bordered" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <p className="font-bold">Activity Category</p>
                        <select name='categoryId' className="select select-bordered w-full" defaultValue="Select Category">
                            <option disabled>Select Category</option>
                            {categoryData.map(({id, name}) => {
                                return <option key={id} value={id}>{name}</option>
                            })}
                        </select>
                    </div>
                    <div className="col-span-1">
                        <p className="font-bold">Pricing</p>
                        <select name='pricing' className="select select-bordered w-full" defaultValue="Select Pricing">
                            <option disabled>Select Pricing</option>
                            <option value='PAID'>Paid</option>
                            <option value='FREE'>Free</option>
                        </select>
                    </div>
                </div>
                <div>
                    <p className="font-bold">Activity Description</p>
                    <textarea placeholder="Bio" name='description' className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                </div>
                <div>
                    <p className="font-bold">Link</p>
                    <input type="text" name='linkUrl' placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div>
                    <p className="font-bold">Featured Image</p>
                    <input type="file" name='featuredImage' className="file-input file-input-bordered w-full" />
                </div>
                <div>
                    <p className="font-bold">Actity Image</p>
                    <input type="file" name='images' multiple className="file-input file-input-bordered w-full" />
                </div>
                <div>
                    <button className="btn btn-neutral w-full ">Submit</button>
                </div>
            </form>
    </div>
  )
}
