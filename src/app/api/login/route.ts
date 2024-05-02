import { PrismaClient } from '@prisma/client';
import { compareSync } from 'bcrypt';
import { error } from 'console';
import { sign } from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

interface LoginRequest {
  username?: string;
  password?: string;
}

export const GET = async (req: NextRequest) => {
  return NextResponse.json({ message: 'This is get Account' });
};

export const POST = async (req: NextRequest) => {
  const { username, password }: LoginRequest = await req.json();

  if (!username || !password) {
    return NextResponse.json({ message: 'Username and password are required.' });
  }

  const checkUser = await prisma.account.findFirst({ where: { username } });
  if (checkUser) {
    const isPasswordValid: boolean = compareSync(password, checkUser.password);
    if (isPasswordValid) {
      const user = {
        id: checkUser.id,
        fullname: checkUser.fullname,
        biography: checkUser.biography,
        job: checkUser.job,
        username: checkUser.username,
      };

      const token = sign(user, process.env.ACCESS_TOKEN_SECRET as string);

      return NextResponse.json({ token: token });
    } else {
      return NextResponse.json({ message: 'Invalid Password' });
    }
  }

  return NextResponse.json({ message: 'Account not found' }, { status: 400 });
};
