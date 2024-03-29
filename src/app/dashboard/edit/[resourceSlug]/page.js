import { AddActivity } from "@/components/dashboard/AddActivty";
import { UpdateActivity } from "@/components/dashboard/updateActivity";
import { API_URL } from "@/config/apiUrl";

async function getResource(slug) {
  // const response = await fetch(`http://localhost:3000/api/v2/resources/${slug}`);
  const response = await fetch(`${API_URL}/api/v2/resources/${slug}`);
  const {data} = await response.json();
  return data;
}

async function getCategories() {
  const categories = await fetch(`${API_URL}/api/v2/categories`, {
    cache: "no-store"
  });
  const {data} = await categories.json();
  return data;
}

export default async function Page({params}) {
  const resourceData = await getResource(params.resourceSlug);
  const categoryData = await getCategories();

  return (
    <div className="space-y-2">
      <h1>Edit Actiivty</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar massa vel odio lobortis consequat.</p>
      <div>
          {/* FORM DATA
          <p>{resourceData.title}</p>
          <p>{resourceData.description}</p>
          <p>{resourceData.linkUrl}</p> */}
          <UpdateActivity categoryData={categoryData} resourceData={resourceData}/>
      </div>
    </div>
  );
}
