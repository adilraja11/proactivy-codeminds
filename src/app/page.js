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

export default async function Page() {
  const data = await getCategories();
  // console.log(data);
  return (
    <div>
      <AppbarLayout/>
      <Homepage categoryData={data} />
    </div>
  );
}
  