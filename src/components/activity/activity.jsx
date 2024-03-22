import { ActivityCard } from "@/components/activity/activitycard";
import { Appbar } from "@/components/navigation/appbar";
import { MainComponent } from "./feature";

export default function Activity({ resourceData }) {
    return (
        <div>
            <div className="max-w-7xl mx-auto mb-12 space-y-6">
                <div>
                    <MainComponent />
                </div>
                <section className="grid grid-cols-3 gap-8">
                    {resourceData.map(({ id, title, slug, category, categoryId, description, featuredImage, images, pricing }) => {
                        return <ActivityCard key={id} id={id} title={title} slug={slug} category={category} categoryId={categoryId} description={description} featuredImage={featuredImage} images={images} pricing={pricing} />
                    })}
                </section>
            </div>
        </div>
    );
}