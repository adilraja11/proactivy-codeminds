import React from 'react'
import { ActivityCard } from "@/components/activity/activitycard";

export const Activities = ({activityData, categoryData}) => {
  return (
    <div>
        <div className="w-full space-y-4 mb-10">
          <div className='space-y-3'>
          <h1 className="text-5xl font-bold text-primary">Activities</h1>
          <p>Dive into a plethora of engaging resources waiting to be explored.</p>
          </div>
        <div className="grid grid-cols-4 gap-8">
          {activityData.slice(0,4).map(({ id, title, slug, categoryId, description, featuredImage, images, pricing }) => {
              const selectedCategory = categoryData.find(category => category.id === categoryId);
              const category = {name: `${selectedCategory.name}`}
              return <ActivityCard key={id} id={id} title={title} slug={slug} category={category} categoryId={categoryId} description={description} featuredImage={featuredImage} images={images} pricing={pricing} />
          })}
        </div>
        </div>
    </div>
  )
}
