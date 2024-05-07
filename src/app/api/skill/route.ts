import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  const dataSkills = await prisma.skill.findMany();

  if (!dataSkills) {
    return NextResponse.json({ message: 'an error occured' }, { status: 500 });
  }

  return NextResponse.json({ message: 'success get all data', data: dataSkills });
};
