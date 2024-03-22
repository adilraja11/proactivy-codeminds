import Activity from "@/components/activity/activity";
import { AppbarLayout } from "@/components/navigation/appbarLayout";

async function getResourcesByCategory(id) {
  // const resources = await fetch(`http://localhost:3000/api/v2/resources?categoryId=${id}`, {
  //   cache: "no-store"
  // });
  const resources = await fetch(`https://proactivy-codeminds.vercel.app/api/v2/resources?categoryId=${id}`, {
    cache: "no-store"
  });

  const {data} = await resources.json();
  return data;
}

export default async function Page({params}) {
  const data = await getResourcesByCategory(params.categoryId);
  console.log(data);
  return (
    <div>
      <AppbarLayout />
      <Activity resourceData={data} />
    </div>
  );
}
