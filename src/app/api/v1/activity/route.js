import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";
import slugify from "slugify";
import { uploadFile } from "@/lib/uploadFile";
import { nanoid } from "nanoid";

export async function GET(request, { params }) {
  const searchParams = request.nextUrl.searchParams;
  const title = searchParams.get("title");
  const category = searchParams.get("category");

  if (category) {
    try {
      const totalAllActivities = await prisma.activity.findMany({
        where: {
          category,
        }
      });
      return NextResponse.json({ data: totalAllActivities, message: "Get data by category successfully" }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ data: null, message: "Get data by category failed" }, { status: 500 });
    }
  }

  if (title) {
    try {
      const totalAllActivities = await prisma.activity.findMany({
        where: {
          title: {
            contains: title,
            mode: 'insensitive'
          }
        }
      });
      return NextResponse.json({ data: totalAllActivities, message: "Get data by Title successfully" }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ data: null, message: "Get data by Title failed" }, { status: 500 });
    }
  }

  try {
    // business logic
    const activityData = await prisma.activity.findMany({
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true
          }
        }
      }
    });
    
    // handling response
    return NextResponse.json({message: `GET Actiivty List Success`, data: activityData}, {status: 200});
  } catch (error) {
    return NextResponse.json({message: `GET Actiivty List Failed`}, {status: 200});
  }
}

export async function POST(request) {
  const formData = await request.formData();

  const id = nanoid();
  const title = formData.get('title');
  const description = formData.get('description');
  const category = formData.get('category');
  const pricing = formData.get('pricing');
  const featuredImage = formData.get('featuredImage');
  const activityImages = formData.getAll("images");
  const linkUrl = formData.get('linkUrl');

  const userId = formData.get("userId");
  // const slug = slugify(title, {lower: true});
  const images = activityImages.map((file) => slugify(file.name, {lower: true}));

  // Upload
  try {
    await uploadFile({ Body: featuredImage, Key: featuredImage.name, ContentType: featuredImage.type, Dir: `activities/${id}` });
    for (let i = 0; i < activityImages.length; i++) {
      await uploadFile({ Body: activityImages[i], Key: activityImages[i].name, ContentType: activityImages[i].type, Dir: `activities/${id}` });
    }
  } catch (error) {
    console.log(error);
  }

  try {
    const createActivity = await prisma.activity.create({
      data: {
        id,
        title,
        slug: slugify(title, {lower: true}),
        category,
        description,
        featuredImage: slugify(featuredImage.name, {lower: true}),
        images: JSON.stringify(images),
        pricing,
        linkUrl,
        userId
      }
    });
    console.log(createActivity);
  } catch (error) {
    console.log(error);
  }

  // data: createActivity, 

  return NextResponse.json({message: "Activity has been created"}, {status: 201});
}