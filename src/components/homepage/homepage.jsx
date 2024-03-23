"use client"
import React from 'react'
import { Appbar } from '../navigation/appbar'
import { Hero } from './hero'
import { Categories } from './categories'
import { Activities } from './activities'

export const Homepage = ({categoryData, activityData}) => {
  return (
    <div>
        <Hero/>
        <div className="min-h-screen flex justify-center">
          <div className="w-full p-4 max-w-[1280px] items-center space-y-24">
            <Categories categoryData={categoryData} />
            <Activities categoryData={categoryData} activityData={activityData}/>
          </div>
        </div>
        
    </div>
  )
}
