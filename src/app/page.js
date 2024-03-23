import { Homepage } from "@/components/homepage/homepage";
import { Appbar } from "@/components/navigation/appbar";
import { API_URL } from "@/config/apiUrl";
import { cookies } from "next/headers";
import * as jose from "jose";

async function getCategories() {
  const categories = await fetch(`${API_URL}/api/v2/categories`, {
    cache: "no-store",
  });
  const { data } = await categories.json();
  return data;
}

async function getActivities() {
  const activities = await fetch(`${API_URL}/api/v2/resources`, {
    cache: "no-store",
  });
  const { data } = await activities.json();
  return data;
}

export default async function Page() {
  const data = await getCategories();
  const activityData = await getActivities();

  let isLoggedIn = false;
  const cookieStore = cookies();

  // logic untuk cek token
  const jwtSecret = process.env.JWT_SECRET;
  const encodedJwtSecret = new TextEncoder().encode(jwtSecret);
  const token = cookieStore.get("token")?.value;

  try {
    await jose.jwtVerify(token, encodedJwtSecret);
    isLoggedIn = true;
  } catch (_) {
    isLoggedIn = false;
  }

  return (
    <div>
      <Appbar isLoggedIn={isLoggedIn} />
      <Homepage categoryData={data} activityData={activityData} />
    </div>
  );
}
