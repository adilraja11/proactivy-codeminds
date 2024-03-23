import { AppbarLayout } from "@/components/navigation/appbarLayout";
import { ActivityTable } from "@/components/profile/activitytable";
import { API_URL } from "@/config/apiUrl";

async function getUserStatus() {
  const response = await fetch(`${API_URL}/api/v2/users/clu2d2tnl00006gld2qigk8ki`, {
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
