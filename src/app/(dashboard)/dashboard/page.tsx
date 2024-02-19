import Link from 'next/link';
import React from 'react';
import { HomeIcon, TrophyIcon, Bars3Icon, UserCircleIcon, PresentationChartLineIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function Dashboard() {
  return (
    <>
      <div className='flex h-screen relative'>
        {/* Sidebar */}
        <aside className='w-60 py-5 bg-gradient-to-t from-blue-900 to-black'>
          <ul className='flex flex-col'>
            <div className='mt-4 mx-auto flex gap-x-2'>
              <Image src='/images/logo.png' width={24} height={24} className='my-auto h-6 w-6' alt='logo' />
              <h2 className='my-auto text-xl text-white'>My Dashboard</h2>
            </div>
            <div className='mt-12 flex flex-col'>
              <Link
                href='#'
                className='px-2 py-4 text-sky-500 flex gap-x-4 rounded-r-lg border-l-4 hover:bg-white hover:bg-opacity-10 bg-white bg-opacity-10 border-sky-500'
              >
                <HomeIcon className='h-6 w-6' />
                <p className='my-auto'>Dashboard</p>
              </Link>
              <Link
                href='#'
                className='px-2 py-4 text-white flex gap-x-4 rounded-r-lg border-l-4 border-transparent hover:bg-white hover:bg-opacity-10'
              >
                <TrophyIcon className='h-6 w-6' />
                <p className='my-auto'>Skills</p>
              </Link>
              <Link
                href='#'
                className='px-2 py-4 text-white flex gap-x-4 rounded-r-lg border-l-4 border-transparent hover:bg-white hover:bg-opacity-10'
              >
                <PresentationChartLineIcon className='h-6 w-6' />
                <p className='my-auto'>Projects</p>
              </Link>
            </div>
          </ul>
        </aside>
        <div className='flex-1 flex flex-col overflow-hidden'>
          {/* Navbar */}
          <nav className='px-5 py-3 flex justify-between text-white'>
            <div className='my-auto'>
              <button>
                <Bars3Icon className='h-6 w-6' />
              </button>
            </div>
            <div className='my-auto'>
              <button className='p-2 flex gap-x-1 bg-white bg-opacity-15 hover:bg-opacity-20 transition-all'>
                <UserCircleIcon className='h-6 w-6' />
                <p>Mahdy Mubasyir</p>
              </button>
            </div>
          </nav>
          <main className='px-5 mt-5'>
            <div className='flex justify-between mb-5'>
              <h2 className='my-auto text-white text-2xl'>Dashboard</h2>
              <div className='my-auto text-white text-sm flex gap-x-1'>
                <Link href='/dashboard' className='text-sky-400'>
                  Dashboard
                </Link>
              </div>
            </div>
            <div className='grid grid-cols-4 gap-x-4'>
              <div className='card h-32 w-full bg-gradient-to-tl from-blue-900 to-black'></div>
              <div className='card h-32 w-full bg-gradient-to-tl from-blue-900 to-black'></div>
              <div className='card h-32 w-full bg-gradient-to-tl from-blue-900 to-black'></div>
              <div className='card h-32 w-full bg-gradient-to-tl from-blue-900 to-black'></div>
            </div>
          </main>
        </div>
        {/* <p className='text-white'>Mahdy</p> */}
        {/* <div className='absolute bottom-0 left-28 z-0'>
          <div className='h-96 w-96 bg-blue-500 bg-opacity-90 rounded-full blur-3xl'></div>
        </div> */}
        {/* <div className='absolute top-40 right-40 z-10'>
          <div className='h-96 w-96 bg-blue-500 rounded-full blur-3xl'></div>
        </div> */}
        {/* <div className='absolute inset-0 flex items-center justify-center'>
          <div className='h-96 w-96 bg-blue-500 rounded-full blur-3xl'></div>
          <div className='h-96 w-96 bg-blue-500 rounded-full blur-3xl'></div>
          <div className='h-96 w-96 bg-blue-500 rounded-full blur-3xl'></div>
        </div> */}
      </div>
    </>
  );
}
