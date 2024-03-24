import React from 'react'
import { CategoriesCards } from './categoriescards'

export const Categories = ({categoryData}) => {
  return (
    <div className="w-full space-y-4">
      <div className='space-y-3'>
        <h1 className="text-5xl font-bold text-primary">Categories</h1>
        <p>Discover learning resources that suit your needs on ProActivy.</p>
      </div>
        <div className='grid grid-cols-3 gap-4'>
          {categoryData.map(({id, name, description}) => {
            return <CategoriesCards key={id} id={id} name={name} description={description} />
          })}
        </div>
    </div>
  )
}
