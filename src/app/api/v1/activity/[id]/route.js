import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";
import { uploadFile } from "@/lib/uploadFile";
import slugify from "slugify";

export async function GET(request, { params }) {
    const activityId = params.id;
    
    try {
        const activityData = await prisma.activity.findFirst({
            where: {
                id: activityId
            },
            include: {
                user: {
                    select: {
                        firstName: true,
                        lastName: true
                    }
                }
            }
        });
        return NextResponse.json({message: `GET by User ID success`, data: activityData});
    } catch (error) {
        return NextResponse.json({ data: null, message: "Get data by ID failed" }, { status: 500 });
    }
}

export async function DELETE(_, { params }) {
    const userId = params.id;

    await prisma.activity.delete({
        where: {
            id: userId
        }
    })

    return NextResponse.json({message: "Delete Activity success"})
}

export async function PATCH(request, { params }) {
    const formData = await request.formData();
  
    const activityId = params.id;
    const title = formData.get('title');
    const description = formData.get('description');
    const category = formData.get('category');
    const pricing = formData.get('pricing');
    const featuredImage = formData.get('featuredImage');
    const activityImages = formData.getAll("images");
    const linkUrl = formData.get('linkUrl');
    const isApproved = parseInt(formData.get('isApproved'))? true : false;

  
    const images = activityImages.map((file) => slugify(file.name, {lower: true}));
  
    // Upload
    try {
      await uploadFile({ Body: featuredImage, Key: featuredImage.name, ContentType: featuredImage.type, Dir: `activities/${activityId}` });
      for (let i = 0; i < activityImages.length; i++) {
        await uploadFile({ Body: activityImages[i], Key: activityImages[i].name, ContentType: activityImages[i].type, Dir: `activities/${activityId}` });
      }
    } catch (error) {
      console.log(error);
    }
  
    try {
      const updateActivity = await prisma.activity.update({
        where: {
            id: activityId
        },
        data: {
          title,
          category,
          description,
        //   isApproved,
          featuredImage: slugify(featuredImage.name, {lower: true}),
          images: JSON.stringify(images),
          pricing,
          linkUrl,
          isApproved
        }
      });
      console.log(updateActivity);
    } catch (error) {
      console.log(error);
    }
  
    return NextResponse.json({message: "Activity has been updated"}, {status: 201});
  }