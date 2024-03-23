import React from 'react'
import { ActivityCard } from "@/components/activity/activitycard";

export const Activities = ({activityData, categoryData}) => {
  return (
    <div>
        <div className="w-full space-y-4 mb-10">
        <h1 className="text-5xl font-bold">Activities</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar massa vel odio lobortis consequat.</p>
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
