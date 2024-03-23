import Activity from "@/components/activity/activity";
import { AppbarLayout } from "@/components/navigation/appbarLayout";
import { API_URL } from "@/config/apiUrl";

async function getResources() {
  const resources = await fetch(`${API_URL}/api/v2/resources`, {
    cache: "no-store",
  });
  const { data } = await resources.json();
  return data;
}

async function getCategories() {
  const categories = await fetch(`${API_URL}/api/v2/categories`, {
    cache: "no-store"
  });
  const {data} = await categories.json();
  return data;
}

export default async function Page({ params }) {
  const data = await getResources();
  const categoryData = await getCategories();
  // console.log(data);
  return (
    <div>
      <AppbarLayout />
      <Activity resourceData={data} categoryData={categoryData} categoryId={params.categoryId} />
    </div>
  );
}
