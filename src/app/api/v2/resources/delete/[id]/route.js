import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function DELETE(_, { params }) {
    const resourceId = params.id;

    await prisma.resource.delete({
        where: {
            id: resourceId
        }
    })

    return NextResponse.json({message: "Delete Activity success"})
}