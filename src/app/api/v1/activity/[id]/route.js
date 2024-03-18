import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

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