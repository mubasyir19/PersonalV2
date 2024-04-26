import { PrismaClient } from '@prisma/client';
import { createWriteStream } from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

type CategorySkill = 'Language' | 'Framework' | 'Database' | 'Software';

interface AddSkillRequest {
  name: string;
  picture: any;
  category: CategorySkill;
}

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
  try {
    const { name, picture, category }: AddSkillRequest = await req.json();

    // Menyimpan file gambar yang diunggah ke folder uploads
    const pictureFileName = `${Date.now()}-${picture.name}`;
    const picturePath = path.join(process.cwd(), 'uploads', pictureFileName);
    const pictureStream = createWriteStream(picturePath);

    // Menulis data gambar ke dalam stream
    pictureStream.write(picture.data);
    pictureStream.end();

    const addSkill = prisma.skill.create({
      data: {
        name,
        category,
        picture: picturePath,
      },
    });

    return NextResponse.json({ message: 'success add data', data: addSkill });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'an error occured', error: error });
  }
};
