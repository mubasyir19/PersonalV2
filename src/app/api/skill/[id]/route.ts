import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const id = params.id;
  try {
    if (!id) {
      return NextResponse.json({ message: 'ID is missing' }, { status: 400 });
    }

    const dataSkill = await prisma.skill.findUnique({
      where: {
        id,
      },
    });

    if (!dataSkill) {
      return NextResponse.json({ message: 'Skill not found' }, { status: 404 });
    }

    return NextResponse.json({
      message: 'success',
      data: dataSkill,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: 'an error occured',
        error,
      },
      { status: 500 }
    );
  }
};
