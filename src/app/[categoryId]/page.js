import Activity from "@/components/activity/activity";
import { AppbarLayout } from "@/components/navigation/appbarLayout";
import { API_URL } from "@/config/apiUrl";

async function getResourcesByCategory(id) {
  const resources = await fetch(`${API_URL}/api/v2/resources?categoryId=${id}`, {
    cache: "no-store",
  });
  const { data } = await resources.json();
  return data;
}

export default async function Page({ params }) {
  const data = await getResourcesByCategory(params.categoryId);
  console.log(data);
  return (
    <div>
      <AppbarLayout />
      <Activity resourceData={data} />
    </div>
  );
}
