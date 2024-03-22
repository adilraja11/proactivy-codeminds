import { Homepage } from "@/components/homepage/homepage";
import { AppbarLayout } from "@/components/navigation/appbarLayout";

async function getCategories() {
  // const categories = await fetch("http://localhost:3000/api/v2/categories");
  const categories = await fetch("https://proactivy-codeminds.vercel.app/api/v2/categories");
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
  