import { Homepage } from "@/components/homepage/homepage";
import { AppbarLayout } from "@/components/navigation/appbarLayout";
import { API_URL } from "@/config/apiUrl";

async function getCategories() {
  const categories = await fetch(`${API_URL}/api/v2/categories`, {
    cache: "no-store"
  });
  const {data} = await categories.json();
  return data;
}

async function getActivities() {
  const activities = await fetch(`${API_URL}/api/v2/resources`, {
    cache: "no-store"
  });
  const {data} = await activities.json();
  return data;
}

export default async function Page() {
  const data = await getCategories();
  const activityData = await getActivities();
  console.log(activityData);
  return (
    <div>
      <AppbarLayout/>
      <Homepage categoryData={data} activityData={activityData} />
    </div>
  );
}
  