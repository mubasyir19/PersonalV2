import { PrismaClient } from '@prisma/client';
import { createWriteStream } from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

type CategorySkill = 'Language' | 'Framework' | 'Database' | 'Software';

interface AddSkillRequest {
  name: string;
  picture: string;
  category: CategorySkill;
}

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
  try {
    const { name, category, picture }: AddSkillRequest = await req.json();

    const addSkill = await prisma.skill.create({
      data: {
        name,
        picture,
        category,
      },
    });

    console.log(addSkill);

    return NextResponse.json({ message: 'success add data', data: addSkill });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'an error occured', error: error });
  }
};
