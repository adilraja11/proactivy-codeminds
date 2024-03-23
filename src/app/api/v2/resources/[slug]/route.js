import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const slug = params.slug;

    try {
        const resourceData = await prisma.resource.findFirst({
            where: {
                slug
            },
            include: {
                category: {
                    select: {
                        name: true
                    }
                }
            }
        });
        return NextResponse.json({message: `GET Resource by Slug success`, data: resourceData});
    } catch (error) {
      console.log(error);
        return NextResponse.json({ data: null, message: "Get Resource by Slug failed" }, { status: 500 });
    }
}