import { AddActivity } from "@/components/dashboard/AddActivty";
import { API_URL } from "@/config/apiUrl";

async function getResource(slug) {
  // const response = await fetch(`http://localhost:3000/api/v2/resources/${slug}`);
  const response = await fetch(`${API_URL}/api/v2/resources/${slug}`);
  const {data} = await response.json();
  return data;
}

export default async function Page({params}) {
  const data = await getResource(params.resourceSlug);
  console.log(data);
  return (
    <div className="space-y-2">
      <h1>Edit Actiivty</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar massa vel odio lobortis consequat.</p>
      <div>
          FORM DATA
          <p>{data.title}</p>
          <p>{data.description}</p>
          <p>{data.linkUrl}</p>
      </div>
    </div>
  );
}
