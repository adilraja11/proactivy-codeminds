import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  // handling request
  const userId = params.id;

  // business logic
  const userData = await prisma.activity.findFirst({
      where: {
          id: userId
      }
  });

  // handling response
  return NextResponse.json({message: `GET Actiivty List Detail Success`, data: userData});
}