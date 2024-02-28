'use client';

import Link from 'next/link';
import React from 'react';
import { HomeIcon, TrophyIcon, PresentationChartLineIcon, PhoneIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  isSidebarOpen: boolean;
}

export default function SidebarDashboard({ isSidebarOpen }: SidebarProps) {
  const pathname = usePathname();

  const linkActive = (path: string) => pathname.startsWith(path);

  return (
    <>
      {isSidebarOpen ? (
        <aside className='w-60 py-5 bg-gradient-to-t from-blue-900 to-black transition-all'>
          <ul className='flex flex-col'>
            <div className='mt-4 mx-auto flex gap-x-2'>
              <Image src='/images/logo.png' width={24} height={24} className='my-auto h-6 w-6' alt='logo' />
              <h2 className='my-auto text-xl text-white'>My Dashboard</h2>
            </div>
            <div className='mt-12 flex flex-col'>
              <Link
                href='/dashboard'
                className={`px-2 py-4 flex gap-x-4 rounded-r-lg border-l-4 hover:bg-white hover:transition-all hover:bg-opacity-10 ${
                  pathname === '/dashboard'
                    ? 'text-sky-500 bg-white bg-opacity-10 border-sky-500'
                    : 'text-white border-transparent'
                }`}
              >
                <HomeIcon className='h-6 w-6' />
                <p className='my-auto'>Dashboard</p>
              </Link>
              <Link
                href='/dashboard/skills'
                className={`px-2 py-4 flex gap-x-4 rounded-r-lg border-l-4 hover:bg-white hover:transition-all hover:bg-opacity-10 ${
                  linkActive('/dashboard/skills')
                    ? 'text-sky-500 bg-white bg-opacity-10 border-sky-500'
                    : 'text-white border-transparent'
                }`}
              >
                <TrophyIcon className='h-6 w-6' />
                <p className='my-auto'>Skills</p>
              </Link>
              <Link
                href='/dashboard/projects'
                className={`px-2 py-4 flex gap-x-4 rounded-r-lg border-l-4 hover:bg-white hover:transition-all hover:bg-opacity-10 ${
                  linkActive('/dashboard/projects')
                    ? 'text-sky-500 bg-white bg-opacity-10 border-sky-500'
                    : 'text-white border-transparent'
                }`}
              >
                <PresentationChartLineIcon className='h-6 w-6' />
                <p className='my-auto'>Projects</p>
              </Link>
              <Link
                href='#'
                className='px-2 py-4 text-white flex gap-x-4 rounded-r-lg border-l-4 border-transparent hover:bg-white hover:transition-all hover:bg-opacity-10'
              >
                <PhoneIcon className='h-6 w-6' />
                <p className='my-auto'>Contact</p>
              </Link>
            </div>
          </ul>
        </aside>
      ) : (
        <aside className='w-16 py-5 bg-gradient-to-t from-blue-900 to-black transition-all'>
          <ul className='flex flex-col'>
            <div className='mt-4 mx-auto flex gap-x-2'>
              <Image src='/images/logo.png' width={24} height={24} className='my-auto h-6 w-6' alt='logo' />
            </div>
            <div className='mt-12 flex flex-col'>
              <Link
                href='#'
                className='px-2 py-4 text-sky-500 rounded-r-lg border-l-4 hover:bg-white hover:bg-opacity-10 hover:transition-all bg-white bg-opacity-10 border-sky-500'
              >
                <HomeIcon className='h-6 w-6 mx-auto' />
              </Link>
              <Link
                href='#'
                className='px-2 py-4 text-white rounded-r-lg border-l-4 border-transparent hover:bg-white hover:transition-all hover:bg-opacity-10'
              >
                <TrophyIcon className='h-6 w-6 mx-auto' />
              </Link>
              <Link
                href='#'
                className='px-2 py-4 text-white rounded-r-lg border-l-4 border-transparent hover:bg-white hover:transition-all hover:bg-opacity-10'
              >
                <PresentationChartLineIcon className='h-6 w-6 mx-auto' />
              </Link>
              <Link
                href='#'
                className='px-2 py-4 text-white rounded-r-lg border-l-4 border-transparent hover:bg-white hover:transition-all hover:bg-opacity-10'
              >
                <PhoneIcon className='h-6 w-6 mx-auto' />
              </Link>
            </div>
          </ul>
        </aside>
      )}
    </>
  );
}
