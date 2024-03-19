import React from 'react'

export const CreateActivityForm = () => {
  return (
    <div className="space-y-4">
            <div className="grid grid-cols-6 gap-4">
                <div className="col-span-4">
                    <p className="font-bold">Activity Name</p>
                    <input type="text" placeholder="Type here" className="input input-bordered" />
                </div>
            
                <div className="col-span-2">
                    <p className="font-bold">Activity Category</p>
                    <select className="select select-bordered w-full">
                        <option disabled selected>Category?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
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
                <p className="font-bold">Featured Image</p>
                <input type="file" className="file-input file-input-bordered w-full" />
            </div>

            <button className="btn btn-neutral w-full">Submit</button>

    </div>
  )
}
