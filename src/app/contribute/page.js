import { CreateContribution } from "@/components/contribute/createContribution";
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
  return (
    <div>
      <CreateContribution data={data}/>
    </div>
  );
}
