"use client"
import React from 'react'
import { useState } from 'react';
import { CategoryDropdown } from './categoryDropdown';
import { API_URL } from "@/config/apiUrl";

export const CreateActivityForm = ({data}) => {
    const [activityName, setActivityName] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [category, setCategory] = useState("Select Category");
    const [description, setDescription] = useState("");
    const [pricing, setPricing] = useState("Select Pricing");
    const [activityLink, setActivityLink] = useState('');

    const handleChangeName = (e) => {
        setActivityName(e.target.value)
    }

    const handleChangeCategoryId = (e) => {
        setCategoryId(e);
    }

    const handleChangeCategoryName = (e) => {
        setCategory(e);
    }

    const handleChangeLink = (e) => {
        setActivityLink(e.target.value)
    }

    const handleChangePricing = (e) => {
        setPricing(e.target.value)
    }

    const handleChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emptyFile = new File([], "");
    
        const formData = new FormData();
        formData.append('userId', "clu2d2tnl00006gld2qigk8ki");
        formData.append('title', activityName);
        formData.append('categoryId', categoryId);
        formData.append('description', description);
        formData.append('pricing', pricing);
        formData.append('linkUrl', activityLink);
        formData.append('images', emptyFile);
        formData.append('featuredImage', emptyFile);
    
        const response = await fetch(`${API_URL}/api/v2/resources`, {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        console.log(data);
        setActivityName("")
        setCategory("Select Category")
        setDescription("")
        setPricing("Select Pricing")
        setActivityLink("")
    }

  return (
    <div className="space-y-4">
            <div>
                <div className="col-span-4">
                    <p className="font-bold">Activity Name</p>
                    <input type="text" placeholder="Type here" className="input input-bordered" value={activityName} onChange={handleChangeName}/>
                </div>
            
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                    <p className="font-bold">Activity Category</p>
                    <CategoryDropdown data={data} onChange={handleChangeCategoryId} onChangeCategoryName={handleChangeCategoryName} value={category}/>
                </div>
                <div className="col-span-1">
                    <p className="font-bold">Pricing</p>
                    <select className="select select-bordered w-full" value={pricing} onChange={handleChangePricing}>
                        <option disabled value="Select Pricing">Select Pricing</option>
                        <option value="PAID">Paid</option>
                        <option value="FREE">Free</option>
                    </select>
                </div>
            </div>


            <div>
                <p className="font-bold">Activity Description</p>
                <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full" value={description} onChange={handleChangeDescription}></textarea>
            </div>
            <div>
                <p className="font-bold">Link</p>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" value={activityLink} onChange={handleChangeLink}/>
            </div>
            <div>
                <button className="btn btn-neutral w-full" onClick={handleSubmit}>Submit</button>
            </div>
            

    </div>
  )
}
