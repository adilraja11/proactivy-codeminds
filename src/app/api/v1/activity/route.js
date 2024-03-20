import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const activities = await prisma.activity.findMany();
    return NextResponse.json(
      { data: activities },
      { message: "Get data succesfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { errorMessage: "Something went wrong. Please try again later" },
      { status: 500 }
    );
  }
}
