import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  // handling request
  const userId = params.id;

  // business logic
  const userData = await prisma.user.findFirst({
      where: {
          id: userId
      }
  });

  // handling response
  return NextResponse.json({message: `GET User Detail Success`, data: userData});
}