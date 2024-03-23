import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";
import slugify from "slugify";
import { uploadFile } from "@/lib/uploadFile";
import { nanoid } from "nanoid";

export async function GET(request, { params }) {
    const searchParams = request.nextUrl.searchParams;
    const categoryId = searchParams.get("categoryId");

    if (categoryId) {
        try {
            const resourceData = await prisma.resource.findMany({
                where: {
                    categoryId: categoryId
                },
                include: {
                    category: {
                        select: {
                            name: true
                        }
                    }
                }
            });

            return NextResponse.json({message: `GET Resource List Success`, data: resourceData}, {status: 200});
        } catch (error) {
            console.log(error);
            return NextResponse.json({message: `GET Actiivty List Failed`}, {status: 500});
        }
    }

    try {
      // business logic
      const resourceData = await prisma.resource.findMany();
      
      // handling response
      return NextResponse.json({message: `GET Resource List Success`, data: resourceData}, {status: 200});
    } catch (error) {
        console.log(error);
      return NextResponse.json({message: `GET Actiivty List Failed`}, {status: 500});
    }
  }

export async function POST(request) {
    const formData = await request.formData();
  
    const id = nanoid();
    const title = formData.get('title');
    const description = formData.get('description');
    const pricing = formData.get('pricing');
    const featuredImage = formData.get('featuredImage');
    const activityImages = formData.getAll("images");
    const linkUrl = formData.get('linkUrl');
    
    const categoryId = formData.get('categoryId');
    const userId = formData.get("userId");
    // const slug = slugify(title, {lower: true});
    const images = activityImages.map((file) => slugify(file.name, {lower: true}));
  
    // Upload
    try {
      await uploadFile({ Body: featuredImage, Key: featuredImage.name, ContentType: featuredImage.type, Dir: `resources/${id}` });
      for (let i = 0; i < activityImages.length; i++) {
        await uploadFile({ Body: activityImages[i], Key: activityImages[i].name, ContentType: activityImages[i].type, Dir: `resources/${id}` });
      }
    } catch (error) {
      console.log(error);
    }
  
    try {
      const createActivity = await prisma.resource.create({
        data: {
          id,
          title,
          slug: slugify(title, {lower: true}),
          description,
          featuredImage: slugify(featuredImage.name, {lower: true}),
          images: JSON.stringify(images),
          pricing,
          linkUrl,
          categoryId,
          userId
        }
      });
      console.log(createActivity);
    } catch (error) {
      console.log(error);
    }
  
    return NextResponse.json({message: "Resource has been created"}, {status: 201});
  }