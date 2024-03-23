import React from 'react'
import { CreateActivityForm } from './createActivityForm'

export const CreateContribution = ({data}) => {
  

  return (
    <div className="min-h-screen flex justify-center">
    <div className="w-full p-4 max-w-[1280px] items-center space-y-4">
      <div className="space-y-4">
          <h1 className="text-5xl font-bold">Request Activity</h1>
          <p>Fill your activity details.</p>
          <CreateActivityForm data={data}/>
      </div>
    </div>
  </div>
  )
}
