import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const allCategories = await prisma.category.findMany();

        return NextResponse.json({ data: allCategories, message: "Get Categories Successfully" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Get Categories Failed" }, { status: 500 });
    }
}

export async function POST(request) {
    const {name, description} = await request.json();

    try {
        const createCategory = await prisma.category.create({
            data: {
                name,
                description
            }
        })

        return NextResponse.json(
            { data: createCategory, message: "Category created successfully" },
            { status: 201 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: "Category created failed" },
            { status: 500 }
        );
    }
}