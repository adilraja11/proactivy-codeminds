import React from 'react'
import { CategoriesCards } from './categoriescards'

export const Categories = () => {
  return (
    <div className="h-full w-full space-y-4">
        <h1 className="text-5xl font-bold">Categories</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar massa vel odio lobortis consequat.</p>
        <CategoriesCards/>
    </div>
  )
}
