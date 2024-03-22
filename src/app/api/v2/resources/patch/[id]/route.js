import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";
import { uploadFile } from "@/lib/uploadFile";
import slugify from "slugify";

export async function PATCH(request, { params }) {
    const formData = await request.formData();
  
    const resourceId = params.id;
    const title = formData.get('title');
    const description = formData.get('description');
    const categoryId = formData.get('categoryId');
    const pricing = formData.get('pricing');
    const featuredImage = formData.get('featuredImage');
    const resourcesImages = formData.getAll("images");
    const linkUrl = formData.get('linkUrl');
    const isApproved = parseInt(formData.get('isApproved'))? true : false;

    const images = resourcesImages.map((file) => slugify(file.name, {lower: true}));
  
    // Upload
    try {
      await uploadFile({ Body: featuredImage, Key: featuredImage.name, ContentType: featuredImage.type, Dir: `resources/${resourceId}` });
      for (let i = 0; i < resourcesImages.length; i++) {
        await uploadFile({ Body: resourcesImages[i], Key: resourcesImages[i].name, ContentType: resourcesImages[i].type, Dir: `resources/${resourceId}` });
      }
    } catch (error) {
      console.log(error);
    }
  
    try {
      const updateResource = await prisma.resource.update({
        where: {
            id: resourceId
        },
        data: {
          title,
          categoryId,
          description,
          featuredImage: slugify(featuredImage.name, {lower: true}),
          images: JSON.stringify(images),
          pricing,
          linkUrl,
          isApproved
        }
      });
      console.log(updateResource);
    } catch (error) {
      console.log(error);
    }
  
    return NextResponse.json({message: "Activity has been updated"}, {status: 201});
  }