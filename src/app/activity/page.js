import { ActivityCard } from "@/components/activity/activitycard";
import { SearchBar } from "@/components/activity/searchbar";
import { Appbar } from "@/components/navigation/appbar";

export default function Page() {
  return (
    <div>
      <Appbar />
      <div className="max-w-7xl mx-auto mb-12 space-y-6">
        <div>
          <SearchBar />
        </div>
        <section className="grid grid-cols-3 gap-8">
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
        </section>
      </div>
    </div>
  );
}
