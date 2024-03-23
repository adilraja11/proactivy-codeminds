import { AddActivity } from "@/components/dashboard/AddActivty";
import { API_URL } from "@/config/apiUrl";

async function getCategories() {
  const categories = await fetch(`${API_URL}/api/v2/categories`, {
    cache: "no-store"
  });
  const {data} = await categories.json();
  return data;
}

export default async function Page() {
  const data = await getCategories();
  // console.log(data);
  return (
    <div className="space-y-6">
      <h1>Add New Actiivty</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar massa vel odio lobortis consequat.</p>
      <AddActivity categoryData={data} />
    </div>
  );
}
