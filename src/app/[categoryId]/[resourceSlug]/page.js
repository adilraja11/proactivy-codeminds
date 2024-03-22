import { AppbarLayout } from "@/components/navigation/appbarLayout";

async function getResource(slug) {
    const response = await fetch(`http://localhost:3000/api/v2/resources/${slug}`);
    const {data} = await response.json();
    return data;
}

export default async function Page({params}){
    const data = await getResource(params.resourceSlug);
    console.log(data);
    return (
        <div>
            <AppbarLayout />
            <div>
                Detail Activity Page
                <p>{data.title}</p>
                <p>{data.description}</p>
                <p>{data.linkUrl}</p>
            </div>
        </div>
    );
}