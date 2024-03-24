import React from 'react'
import { CreateActivityForm } from './createActivityForm'

export const CreateContribution = ({data}) => {
  

  return (
    <div className="min-h-screen flex justify-center">
    <div className="w-full p-4 max-w-[1280px] items-center space-y-4 mt-24">
      <div className="space-y-4">
        <div className='space-y-2'>
          <h1 className="text-4xl font-bold">Form Contribution</h1>
          <p>Fill your activity details.</p>
        </div>
          <CreateActivityForm data={data}/>
      </div>
    </div>
  </div>
  )
}
