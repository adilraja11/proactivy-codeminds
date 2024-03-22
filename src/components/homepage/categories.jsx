import React from 'react'
import { CategoriesCards } from './categoriescards'

export const Categories = ({categoryData}) => {
  return (
    <div className="w-full space-y-4">
        <h1 className="text-5xl font-bold">Categories</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar massa vel odio lobortis consequat.</p>
          
        <div className='grid grid-cols-3 gap-4'>
          {categoryData.map(({id, name, description}) => {
            return <CategoriesCards key={id} id={id} name={name} description={description} />
          })}
        </div>
    </div>
  )
}
