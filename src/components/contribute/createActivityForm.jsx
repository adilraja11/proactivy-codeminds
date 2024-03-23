import React from 'react'

export const CreateActivityForm = () => {
  return (
    <div className="space-y-4">
            <div>
                <div className="col-span-4">
                    <p className="font-bold">Activity Name</p>
                    <input type="text" placeholder="Type here" className="input input-bordered" />
                </div>
            
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                    <p className="font-bold">Activity Category</p>
                    <select className="select select-bordered w-full" defaultValue="Select Category">
                        <option disabled>Select Category</option>
                        <option>TK</option>
                        <option>SD</option>
                        <option>SMP</option>
                        <option>SMA</option>
                        <option>Kuliah</option>
                        <option>PROFESSIONAL</option>
                    </select>
                </div>
                <div className="col-span-1">
                    <p className="font-bold">Pricing</p>
                    <select className="select select-bordered w-full" defaultValue="Select Pricing">
                    <option disabled>Select Pricing</option>
                    <option>Paid</option>
                    <option>Free</option>
                    </select>
                </div>
            </div>


            <div>
                <p className="font-bold">Activity Description</p>
                <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
            </div>
            <div>
                <p className="font-bold">Link</p>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
            </div>
            <div>
                <button className="btn btn-neutral w-full ">Submit</button>
            </div>
            

    </div>
  )
}
