import { ActivityCard } from "@/components/activity/activitycard";
import { Appbar } from "@/components/navigation/appbar";
import { MainComponent } from "./feature";

export default function Activity({ activityData }) {
    return (
        <div>
            <div className="max-w-7xl mx-auto mb-12 space-y-6">
                <div>
                    <MainComponent />
                </div>
                <section className="grid grid-cols-3 gap-8">
                    {activityData.map(({ id, title, category, description, featuredImage, pricing }) => {
                        return <ActivityCard key={id} id={id} title={title} category={category} description={description} pricing={pricing} />
                    })}
                </section>
            </div>
        </div>
    );
}