import Activity from "@/components/activity/activity";

async function getActivities(queryValue) {
  if (queryValue) {
    const res = await fetch(
      `http://localhost:3000/api/v1/activity?query=${queryValue}`,
      {
        cache: "no-cache",
      }
    );
    const data = await res.json();
    return data;
  }
  const res = await fetch("http://localhost:3000/api/v1/activity", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
}

export default async function Page({ searchParams }) {
  const query = searchParams.query;
  const { data } = await getActivities(query);

  return <Activity activityData={data} />;
}
