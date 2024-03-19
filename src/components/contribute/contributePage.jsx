import React from 'react'
import { ContributionTable } from './contributionTable'

export const ContributePage = () => {
  return (
    <div>
        <div className="min-h-screen flex justify-center">
          <div className="w-full p-4 max-w-[1280px] items-center space-y-4">
            <div className="space-y-4">
                <h1 className="text-5xl font-bold">My Status</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar massa vel odio lobortis consequat.</p>
            </div>
            <ContributionTable/>
          </div>
        </div>
    </div>
  )
}
