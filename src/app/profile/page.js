import { AppbarLayout } from "@/components/navigation/appbarLayout";
import { ActivityTable } from "@/components/profile/activitytable";

async function getUserStatus() {
  const response = await fetch(`http://localhost:3000/api/v2/users/clu2d2tnl00006gld2qigk8ki`, {
    cache: "no-store"
  });
  const {data} = await response.json();
  return data;
}

export default async function Page({params}) {
  const data = await getUserStatus(params);
  console.log(data);

  return (
    <div>
      <AppbarLayout />
      <ActivityTable userData={data} />
    </div>
  );
}
