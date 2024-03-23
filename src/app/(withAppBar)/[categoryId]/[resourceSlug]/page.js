import { DetailActivity } from "@/components/activity/detailActivity";
import { AppbarLayout } from "@/components/navigation/appbarLayout";
import { API_URL } from "@/config/apiUrl";

async function getResource(slug) {
    // const response = await fetch(`http://localhost:3000/api/v2/resources/${slug}`);
    const response = await fetch(`${API_URL}/api/v2/resources/${slug}`, {
        cache: "no-store"
    });
    const {data} = await response.json();
    return data;
}

export default async function Page({params}){
    const data = await getResource(params.resourceSlug);
    console.log(data);
    return (
        <div>
            <div className="max-w-6xl mx-auto mb-12">
                <DetailActivity detailResource={data}/>
            </div>
        </div>
    );
}