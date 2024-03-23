import { TableRequest } from "@/components/dashboard/tableRequest";
import { API_URL } from "@/config/apiUrl";

async function getResources() {
  const resources = await fetch(`${API_URL}/api/v2/resources`, {
    cache: "no-store"
  });
  const {data} = await resources.json();
  return data;
}

export default async function Page() {
  const data = await getResources();
  console.log(data);

  return (
    <div className="space-y-2">
      <h1>Request New Actiivty</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar massa vel odio lobortis consequat.</p>
      <TableRequest allResourceData={data} />
    </div>
  );
}
