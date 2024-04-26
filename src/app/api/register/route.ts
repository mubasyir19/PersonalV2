import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcrypt';
import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';

interface RegisterRequest {
  fullname: string;
  username: string;
  password: string;
  biography: string;
  job: string;
}

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const account = await prisma.account.findMany();
    return NextResponse.json({ messsage: 'success get accounts', data: account });
  } catch (error) {
    return NextResponse.json({ messsage: 'error occured', error: error });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const { fullname, username, password, biography, job }: RegisterRequest = await req.json();

    // Periksa apakah fullname, username, dan password ada
    if (!fullname || !username || !password || biography || job) {
      return NextResponse.json({ message: 'fullname, username, password, biography, and job are required' });
    }

    // console.log('ini fullname = ', fullname);
    // console.log('ini username = ', username);
    // console.log('ini biography = ', biography);
    // console.log('ini job = ', job);
    // console.log('ini password = ', password);

    // Periksa apakah username sudah terdaftar
    const existingUser = await prisma.account.findFirst({ where: { username } });
    if (existingUser) {
      return NextResponse.json({ message: 'An account with this username has already been registered' });
    }

    // Buat user baru
    const newUser = await prisma.account.create({
      data: {
        fullname,
        username,
        biography,
        job,
        password: hashSync(password, 10),
      },
    });

    // Kirim respons JSON
    return NextResponse.json({ message: 'User registered successfully', data: newUser });
  } catch (error) {
    console.error('An error occurred:', error);
    return NextResponse.json({ message: 'An error occurred', error: error });
  }
};
