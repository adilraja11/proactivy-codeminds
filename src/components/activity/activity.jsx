"use client"

import { useState } from "react";
import { ActivityCard } from "@/components/activity/activitycard";
import { Appbar } from "@/components/navigation/appbar";
import { MainComponent } from "./feature";

export default function Activity({ resourceData, categoryData, categoryId }) {
    const [searchCategoryId, setSelectedCategoryId] = useState(categoryId);
    const [searchContent, setSearchContent] = useState('');

    // console.log(searchCategoryId)

    if (searchContent || searchCategoryId) {
        resourceData = resourceData.filter(data => 
            (!searchCategoryId || data.categoryId === searchCategoryId) && 
            (!searchContent || data.title.toLowerCase().includes(searchContent.toLowerCase()))
        );
    }

    const handleChangeCategoryId = (e) => {
        setSelectedCategoryId(e);
    }

    const handleChangeSearchContent = (e) => {
        setSearchContent(e);
    }


    return (
        <div>
            <div className="max-w-7xl mx-auto mb-12 space-y-6">
                <div>
                    <MainComponent categoryData={categoryData} onChangeCategoryId={handleChangeCategoryId} onChangeSearch={handleChangeSearchContent} categoryId={searchCategoryId}/>
                </div>
                <section className="grid grid-cols-3 gap-8">
                    {resourceData.map(({ id, title, slug, categoryId, description, featuredImage, images, pricing }) => {
                        const selectedCategory = categoryData.find(category => category.id === categoryId);
                        const category = {name: `${selectedCategory.name}`}
                        return <ActivityCard key={id} id={id} title={title} slug={slug} category={category} categoryId={categoryId} description={description} featuredImage={featuredImage} images={images} pricing={pricing} />
                    })}
                </section>
            </div>
        </div>
    );
}